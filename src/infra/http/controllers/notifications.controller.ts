import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
  Response,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { AppService } from '../../../app.service';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNOtification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
    try {
      const { notification } = await this.sendNOtification.execute({
        content,
        category,
        recipientId,
      });
      return notification;
    } catch ({ message }: any) {
      throw new BadRequestException({ successs: false, message });
      return new Error('dddddddd');
    }
  }
}
