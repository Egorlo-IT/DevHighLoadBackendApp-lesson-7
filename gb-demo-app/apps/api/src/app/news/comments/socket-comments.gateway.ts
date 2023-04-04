/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger, UseGuards } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { WsJwtGuard } from '../../auth/ws-jwt.guard';
import { CommentsService } from './comments.service';
import { OnEvent } from '@nestjs/event-emitter';

export type Comment = { message: string; idNews: string; idComment?: string };

@WebSocketGateway({ cors: true })
export class SocketCommentsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('addComment')
  async handleMessage(client: Socket, comment: Comment): Promise<void> {
    const { idNews, message } = comment;

    console.log('idNews:', idNews);
    console.log('message:', message);

    const userId: string = client.data.user.id;
    const _comment = await this.commentsService.create(idNews, message, userId);
    this.server.to(idNews.toString()).emit('newComment', _comment);
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('editComment')
  async handleMessageEditComment(
    client: Socket,
    comment: Comment
  ): Promise<void> {
    const { idComment, idNews, message } = comment;

    console.log(idComment, idNews, message);

    const userId: string = client.data.user.id;
    await this.commentsService.edit(idComment, idNews, message, userId);
    const comments = await this.commentsService.findAll(idNews);

    console.log('comments:', comments);

    this.server.to(idNews.toString()).emit('editComment', { comments });
  }

  @OnEvent('comment.remove')
  handleRemoveCommentEvent(payload): void {
    console.log('SocketCommentsGateway comment.remove');
    const { idComment, idNews } = payload;
    this.server.to(idNews.toString()).emit('removeComment', { idComment });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server): void {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async handleConnection(client: Socket, ...args: any[]): Promise<void> {
    const { newsId } = client.handshake.query;
    // После подключения пользователя к веб-сокету, подключаем его в комнату
    client.join(newsId);
    this.logger.log(`Client connected: ${client.id}`);
  }
}
