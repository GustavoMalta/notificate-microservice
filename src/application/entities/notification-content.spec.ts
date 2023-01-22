import { NotificationContent } from './notification-content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new NotificationContent('New notification');

    expect(content).toBeTruthy();
  });

  it('should NOT be able to create a notification content with less then 5 characters', () => {
    // const content = () => new NotificationContent('New');

    expect(() => new NotificationContent('New')).toThrow();
  });

  it('should NOT be able to create a notification content with more then 240 characters', () => {
    // const content = () => new NotificationContent('New');

    expect(() => new NotificationContent('x'.repeat(241))).toThrow();
  });
});
