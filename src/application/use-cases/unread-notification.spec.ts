import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { UnReadNotification } from './unread-notification';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Unread notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(notificationsRepository);

    const newNotification = makeNotification({ readAt: new Date() });

    await notificationsRepository.create(newNotification);

    await unReadNotification.execute({ notificationId: newNotification.id });

    expect(notificationsRepository.notifications[0]['props'].readAt).toBeNull();
  });

  it('should NOT be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotification = new UnReadNotification(notificationsRepository);

    const testingUnread = () => {
      return unReadNotification.execute({
        notificationId: 'Invalid Notification ID',
      });
    };
    expect(testingUnread).rejects.toThrow(NotificationNotFound);
  });
});
