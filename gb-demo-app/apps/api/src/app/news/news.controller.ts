import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoriesService } from '../categories/categories.service';
// import { MailService } from '../mail/mail.service';
import { UsersService } from '../users/users.service';
import { HelperFileLoaderNews } from '../utils/helperFileLoaderNews';
import { imageFileFilter } from '../utils/imageFileFilter';
import { CommentsService } from './comments/comments.service';
import { NewsCreateDto } from './dtos/news-create.dto';
import { NewsIdDto } from './dtos/news-id.dto';
import { NewsEntity } from './news.entity';
import { NewsService } from './news.service';
import Redis from 'ioredis';

const redis = new Redis();

const NEWS_PATH = '/news-static/';
const newsHelperFileLoader = new HelperFileLoaderNews();
newsHelperFileLoader.path = NEWS_PATH;

@Controller('news')
@ApiBearerAuth()
@ApiTags('News')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private usersService: UsersService,
    private readonly commentsService: CommentsService,
    private categoriesService: CategoriesService // private mailService: MailService
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all news' })
  @ApiResponse({
    status: 200,
    description: 'News successfully received',
    type: NewsEntity,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: Error,
  })
  async getAll(): Promise<{ news: NewsEntity[] }> {
    const news = await this.newsService.findAll();
    const data = JSON.parse(JSON.stringify(news), function (key, value) {
      if (key == 'password' || key == 'email') return;
      return value;
    });

    return data;
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  @UseInterceptors(
    FileInterceptor('cover', {
      storage: diskStorage({
        destination: newsHelperFileLoader.destinationPath,
        filename: newsHelperFileLoader.customFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  @ApiOperation({ summary: 'News creation' })
  @ApiResponse({
    status: 200,
    description: 'News successfully created',
    type: NewsEntity,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: Error,
  })
  async create(
    @Body() news: NewsCreateDto,
    @UploadedFile() cover: Express.Multer.File
  ) {
    try {
      const _user = await this.usersService.findById(news.authorId);
      if (!_user) {
        throw new HttpException(
          'Не существует такого автора',
          HttpStatus.BAD_REQUEST
        );
      }
      const _category = await this.categoriesService.findById(news.categoryId);
      if (!_category) {
        throw new HttpException(
          'Не существует такой категории',
          HttpStatus.BAD_REQUEST
        );
      }

      const _newsEntity = new NewsEntity();
      if (cover?.filename) {
        _newsEntity.cover = NEWS_PATH + cover.filename;
      }
      _newsEntity.title = news.title;
      _newsEntity.description = news.description;
      _newsEntity.user = _user;
      _newsEntity.category = _category;

      const _news = await this.newsService.create(_newsEntity);
      // await this.mailService.sendNewNewsForAdmins(
      //   ['egorlo059@gmail.com'],
      //   _news
      // );
      return _news;
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id/detail')
  @ApiOperation({ summary: 'News details' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({
    status: 200,
    description: 'News details successfully received',
    type: NewsEntity,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
    type: Error,
  })
  async getByIdDetail(@Param() params: NewsIdDto) {
    const newsData = await this.newsService.findById(params.id);
    const news = JSON.parse(JSON.stringify(newsData), function (key, value) {
      if (key == 'password' || key == 'email') return;
      return value;
    });

    const commentsData = await this.commentsService.findAll(params.id);
    const comments = JSON.parse(
      JSON.stringify(commentsData),
      function (key, value) {
        if (key == 'password' || key == 'email') return;
        return value;
      }
    );

    return { news, comments };
  }

  @Get('score')
  async getScore() {
    const data = await this.newsService.findAll();

    await redis.flushdb();
    const users = {};
    const usersSet = new Set();

    data.news.forEach(async (news) => {
      if (usersSet.has(news.user.firstName + ' ' + news.user.lastName)) {
        users[`${news.user.firstName} ${news.user.lastName}`] += 1;
      } else {
        usersSet.add(news.user.firstName + ' ' + news.user.lastName);
        users[`${news.user.firstName} ${news.user.lastName}`] = 1;
      }
    });

    Object.keys(users).forEach((key) => {
      redis.zadd('authtors', users[key], key);
    });
    return await redis.zrevrange('authtors', 0, 10, 'WITHSCORES');
  }
}
