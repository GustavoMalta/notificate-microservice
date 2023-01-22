import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
  error?: Object | unknown;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new NotificationContent(content),
      category,
    });
    try {
    } catch (error) {
      console.log(error);
      return { notification, error };
    }

    const retorno = await this.notificationsRepository.create(notification);
    console.log(retorno);
    return { notification };
  }
}
