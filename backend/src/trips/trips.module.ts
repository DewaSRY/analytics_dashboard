import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripService } from './trips.service';
import { YellowTaxiTripController } from './trips.controller';
import { Trips } from '../entities/trip.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trips])],
  controllers: [YellowTaxiTripController],
  providers: [TripService],
  exports: [TripService],
})
export class TripsModule {}
