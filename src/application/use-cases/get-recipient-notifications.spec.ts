import { randomUUID } from 'crypto';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get notification', () => {
  it('should be able to get notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: recipientA,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: recipientA }),
        expect.objectContaining({ recipientId: recipientA }),
      ]),
    );
  });
});
