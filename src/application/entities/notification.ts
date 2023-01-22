import { isUUID } from 'class-validator';
import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { NotificationContent } from './notification-content';

export interface NotificationProps {
  content: NotificationContent;
  recipientId: string;
  category: string;
  readAt?: Date | null;
  cancelledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    if (!isUUID(props.recipientId)) throw new Error('Recipient is not a UUID');

    this._id = id ?? randomUUID();
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
    if (!isUUID(value)) throw new Error('Recipient is not a UUID');
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
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public read() {
    this.props.readAt = new Date();
  }
  public unRead() {
    this.props.readAt = null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get cancelledAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public cancel(): void {
    this.props.cancelledAt = new Date();
  }
}
