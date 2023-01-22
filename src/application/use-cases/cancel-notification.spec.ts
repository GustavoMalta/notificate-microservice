import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { CancelNotification } from './cancel-notification';
import { makeNotification } from '@test/factories/notification-factory';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const newNotification = makeNotification();

    await notificationsRepository.create(newNotification);

    await cancelNotification.execute({ notificationId: newNotification.id });

    expect(
      notificationsRepository.notifications[0]['props'].cancelledAt,
    ).toEqual(expect.any(Date));
  });

  it('should NOT be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const testingCancel = async () => {
      return await cancelNotification.execute({
        notificationId: 'Invalid Notification ID',
      });
    };
    expect(testingCancel).rejects.toThrow(NotificationNotFound);
  });
});
