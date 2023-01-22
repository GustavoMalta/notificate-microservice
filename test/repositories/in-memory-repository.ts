import { NotificationContent } from 'src/application/entities/notification-content';
import { Notification } from '../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    // notification['props'].id = 'randomUUID()';
    this.notifications.push(notification);
  }
}
