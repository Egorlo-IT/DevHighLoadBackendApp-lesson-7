import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  // PrimaryGeneratedColumn,
  OneToMany,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import { NewsEntity } from '../news/news.entity';

@Entity('categories')
export class CategoriesEntity {
  // @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @ApiProperty({ example: 'Category id', description: 'User id' })
  id: ObjectID;

  @Column('text')
  @ApiProperty({ example: 'Category name', description: 'Category name' })
  name: string;

  @OneToMany(() => NewsEntity, (news) => news.category)
  news: NewsEntity[];
}
