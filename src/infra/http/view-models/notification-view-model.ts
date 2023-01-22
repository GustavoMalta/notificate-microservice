import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHTTP({ id, content, category, recipientId }: Notification) {
    return {
      id,
      content: content.value,
      category: category,
      recipientId: recipientId,
    };
  }
}
