import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification: notificationA } = await sendNotification.execute({
      content: 'Test send notification',
      category: 'social',
      recipientId: randomUUID(),
    });

    const { notification: notificationB } = await sendNotification.execute({
      content: 'Test send notification',
      category: 'social',
      recipientId: randomUUID(),
    });
    // console.log(notificationsRepository.notifications[0]);
    // console.log(notificationsRepository.notifications[0].id);
    expect(notificationsRepository.notifications).toHaveLength(2);
    expect(notificationsRepository.notifications[0]).toEqual(notificationA);
    expect(notificationsRepository.notifications[1]).toEqual(notificationB);
    return sendNotification;
  });
});
