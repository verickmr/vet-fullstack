import { Module } from '@nestjs/common';
import { SchedulingModule } from './scheduling/scheduling.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [SchedulingModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
