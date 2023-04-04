import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  // PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import { CategoriesEntity } from '../categories/categories.entity';
import { UsersEntity } from '../users/users.entity';
import { CommentsEntity } from './comments/comments.entity';

@Entity('news')
export class NewsEntity {
  // @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @ApiProperty({ example: 'News id', description: 'News id' })
  id: ObjectID;

  @Column('text')
  @ApiProperty({ example: 'News title', description: 'News title' })
  title: string;

  @Column('text')
  @ApiProperty({ example: 'News description', description: 'News description' })
  description: string;

  @Column('text', { nullable: true })
  @ApiProperty({ example: 'News cover', description: 'News cover' })
  cover: string;

  @Column(() => CategoriesEntity)
  @ManyToOne(() => CategoriesEntity, (category) => category.news)
  @ApiProperty({
    example: 'Entity CategoriesEntity',
    description: 'Entity CategoriesEntity',
  })
  category: CategoriesEntity;

  @Column(() => UsersEntity)
  @ManyToOne(() => UsersEntity, (user) => user.news)
  user: UsersEntity;

  // @Column(() => CommentsEntity)
  @OneToMany(() => CommentsEntity, (comments) => comments.news)
  @ApiProperty({
    example: 'Array entities CommentsEntity',
    description: 'Array entities CommentsEntity',
  })
  comments: CommentsEntity[];

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    description: 'Date create news',
  })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    description: 'Date update news',
  })
  updatedAt: Date;
}
