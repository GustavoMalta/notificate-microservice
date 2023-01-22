export class NotificationContent {
  private readonly content: string;

  constructor(content: string) {
    const valid = this.validateContentLength(content);
    if (!valid) {
      throw new Error('Content length error');
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
