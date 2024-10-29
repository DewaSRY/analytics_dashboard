import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TripsModule } from './trips/trips.module';
import { AppDataSource } from './data-source';
import { FilterOptionsModule } from './filter-options/filter-options.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(AppDataSource.options),
    TripsModule,
    FilterOptionsModule,
  ],
})
export class AppModule {}
