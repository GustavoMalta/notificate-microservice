import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { randomUUID } from 'crypto';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'admin',
    content: new NotificationContent('content here'),
    recipientId: randomUUID(),
    ...override,
  });
}
