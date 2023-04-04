import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CategoriesEntity } from './app/categories/categories.entity';
import { CommentsEntity } from './app/news/comments/comments.entity';
import { NewsEntity } from './app/news/news.entity';
import { UsersEntity } from './app/users/users.entity';

@Injectable()
export class PgConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      database: 'news_blog',
      synchronize: true,
      logging: ['query', 'error'],
      entities: [UsersEntity, NewsEntity, CommentsEntity, CategoriesEntity],
      migrations: [],
      subscribers: [],
    };
  }
}
