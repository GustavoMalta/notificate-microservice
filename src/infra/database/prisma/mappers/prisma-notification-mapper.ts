import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { Notification as NotificationRaw } from '@prisma/client';

export class PrismaNotificationsMapper {
  static toPrisma({
    id,
    content,
    category,
    recipientId,
    readAt,
    cancelledAt,
    createdAt,
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

  static toDomain(raw: NotificationRaw): Notification {
    return new Notification(
      {
        content: new NotificationContent(raw.content),
        category: raw.category,
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        cancelledAt: raw.cancelledAt ?? null,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
