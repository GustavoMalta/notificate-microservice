import { isUUID } from 'class-validator';
import { randomUUID } from 'crypto';
import { Replace } from '../../helper/Replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  content: NotificationContent;
  recipientId: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    if (!isUUID(props.recipientId)) throw new Error('Recipient is not a UUID');
    // this.content
    this.recipientId = 'aaa';

    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
    return this;
  }

  public get id() {
    return this._id;
  }

  public set content(value: NotificationContent) {
    this.props.content = value;
  }
  public get content(): NotificationContent {
    return this.props.content;
  }

  public set recipientId(value: string) {
    if (!isUUID(value)) throw new Error('Recipient is not a UUID EEEBAAAAAA');
    this.props.recipientId = value;
  }
  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set category(value: string) {
    this.props.category = value;
  }
  public get category(): string {
    return this.props.category;
  }

  public set readAt(value: Date | null | undefined) {
    this.props.readAt = value;
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
