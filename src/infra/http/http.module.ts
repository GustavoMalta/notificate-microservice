import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseMolude } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseMolude],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
