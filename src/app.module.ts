import { Module } from '@nestjs/common';
import { DatabaseMolude } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseMolude],
})
export class AppModule {}
