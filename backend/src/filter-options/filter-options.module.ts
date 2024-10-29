import { Module } from '@nestjs/common';
import { FilterOptionsController } from './filter-options.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Trips } from '@/entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trips])],
  controllers: [FilterOptionsController],
})
export class FilterOptionsModule {}
