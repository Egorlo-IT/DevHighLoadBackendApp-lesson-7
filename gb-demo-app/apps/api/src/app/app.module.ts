import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CategoriesModule } from './categories/categories.module';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgConfigService } from '../pgConfigService';
import { EventEmitterModule } from '@nestjs/event-emitter';
import redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    NewsModule,
    CategoriesModule,
    MailModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: PgConfigService,
      inject: [PgConfigService],
    }),
    EventEmitterModule.forRoot(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CacheModule.register<any>({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
