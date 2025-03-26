import { Module } from '@nestjs/common';
import { PrismService } from './prism.service';

@Module({
  providers: [PrismService],
  exports: [PrismService],
})
export class DbModule {}
