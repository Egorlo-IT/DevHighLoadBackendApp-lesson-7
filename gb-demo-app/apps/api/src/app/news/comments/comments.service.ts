import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../../users/users.service';
import { Repository } from 'typeorm';
import { NewsService } from '../news.service';
import { CommentsEntity } from './comments.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsEntity)
    private readonly commentsRepository: Repository<CommentsEntity>,
    private readonly userService: UsersService,
    private readonly newsService: NewsService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  async findAll(id: string): Promise<CommentsEntity[]> {
    console.log('id', id);

    const data = await this.commentsRepository.find().then((result) => {
      console.log('result:', result);

      // const filterData = result.filter((item) => item.news.id === id);
      return result;
    });

    return data;
  }

  async findById(id: string): Promise<CommentsEntity> {
    const data = await this.commentsRepository.find({
      // where: {
      //   id: id,
      // },
      // relations: ['user', 'news'],
    });
    return data[0];
  }

  async create(
    idNews: string,
    message: string,
    userId: string
  ): Promise<CommentsEntity | HttpException> {
    // console.log('idNews', idNews);
    // console.log('userId', userId);

    const _news = await this.newsService.findById(idNews);
    const _user = await this.userService.findById(userId);
    if (!_news || !_user) {
      throw new HttpException(
        'Не существует такой новости или пользователя',
        HttpStatus.BAD_REQUEST
      );
    }
    const _commentEntity = new CommentsEntity();
    _commentEntity.message = message;
    _commentEntity.news = _news;
    _commentEntity.user = _user;
    return await this.commentsRepository.save(_commentEntity);
  }

  async remove(idComment: string, idNews: string) {
    const _comment = await this.findById(idComment);

    console.log('CommentsService comment.remove');

    this.eventEmitter.emit('comment.remove', {
      idComment: _comment.id,
      idNews: idNews,
    });
    return await this.commentsRepository.remove(_comment);
  }

  async removeAll(idNews) {
    const _comments = await this.findAll(idNews);
    return await this.commentsRepository.remove(_comments);
  }

  async edit(
    idComment: string,
    idNews: string,
    message: string,
    userId: string
  ): Promise<CommentsEntity> {
    const _news = await this.newsService.findById(idNews);
    const _user = await this.userService.findById(userId);
    if (!_news || !_user) {
      throw new HttpException(
        'Не существует такой новости или пользователя',
        HttpStatus.BAD_REQUEST
      );
    }
    const _commentEntity = new CommentsEntity();
    _commentEntity.message = message;
    _commentEntity.news = _news;
    _commentEntity.user = _user;
    await this.commentsRepository.update(idComment, _commentEntity);
    return _commentEntity;
  }
}
