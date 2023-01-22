import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const newNotification = makeNotification();

    await notificationsRepository.create(newNotification);

    await readNotification.execute({ notificationId: newNotification.id });

    expect(notificationsRepository.notifications[0]['props'].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should NOT be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const testingRead = () => {
      return readNotification.execute({
        notificationId: 'Invalid Notification ID',
      });
    };
    expect(testingRead).rejects.toThrow(NotificationNotFound);
  });
});
