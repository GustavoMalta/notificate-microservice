import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count notification', () => {
  it('should be able to count notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    const recipientA = randomUUID();
    const recipientB = randomUUID();

    await notificationsRepository.create(
      makeNotification({ recipientId: recipientA }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: recipientA }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: recipientB }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: recipientA,
    });

    expect(count).toEqual(2);
  });
});
