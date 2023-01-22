import { randomUUID } from 'crypto';
import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('Z Content'),
      category: 'test',
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
