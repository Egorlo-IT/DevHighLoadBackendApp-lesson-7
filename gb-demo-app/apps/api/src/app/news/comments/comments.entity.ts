import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  // PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ObjectIdColumn,
  ObjectID,
} from 'typeorm';
import { UsersEntity } from '../../users/users.entity';
import { NewsEntity } from '../news.entity';

@Entity('comments')
export class CommentsEntity {
  // @PrimaryGeneratedColumn()
  @ObjectIdColumn()
  @ApiProperty({ example: 'Comment id', description: 'Comment id' })
  id: ObjectID;

  @Column('text')
  @ApiProperty({ example: 'Comment message', description: 'Comment message' })
  message: string;

  @Column(() => UsersEntity)
  @ManyToOne(() => UsersEntity, (user) => user.comments)
  user: UsersEntity;

  @Column(() => NewsEntity)
  @ManyToOne(() => NewsEntity, (news) => news.comments)
  news: NewsEntity;

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    description: 'Date create comment',
  })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    description: 'Date update comment',
  })
  updatedAt: Date;
}
