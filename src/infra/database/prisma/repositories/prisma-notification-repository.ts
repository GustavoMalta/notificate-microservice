import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NotificationContent } from 'src/application/entities/notification-content';
import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { content, category, recipientId, readAt, createdAt, id } =
      notification;

    const newNotification = await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category: category,
        recipientId: recipientId,
        readAt: readAt,
        createdAt: createdAt,
      },
    });
    console.log(newNotification);
  }
}
