import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHTTP({
    id,
    content,
    category,
    recipientId,
    readAt,
    createdAt,
    cancelledAt,
  }: Notification) {
    return {
      id,
      content: content.value,
      category: category,
      recipientId: recipientId,
      readAt: readAt,
      createdAt: createdAt,
      cancelledAt: cancelledAt,
    };
  }
}
