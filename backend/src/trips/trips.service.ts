import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trips } from '../entities/trip.entity';

import { CreateTripsDto } from '@/request/create-trips.request.dto';
import { PaginationDto } from '@/response/paginate.response';
import { TripFilterDto } from '@/request/trips_filter.request';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trips)
    private readonly yellowTaxiTripRepository: Repository<Trips>,
  ) {}

  async create(createTripDto: CreateTripsDto): Promise<Trips> {
    const trip = this.yellowTaxiTripRepository.create(createTripDto);
    return await this.yellowTaxiTripRepository.save(trip);
  }

  async findAll(filters: TripFilterDto): Promise<PaginationDto<Trips>> {
    const query =
      this.yellowTaxiTripRepository.createQueryBuilder('yellow_taxi_trips');

    if (filters.startTime && filters.endTime) {
      query.andWhere('pickup_datetime BETWEEN :startTime AND :endTime', {
        startTime: filters.startTime,
        endTime: filters.endTime,
      });
    }

    if (filters.minFare) {
      query.andWhere('fare_amount >= :minFare', {
        minFare: filters.minFare,
      });
    }

    if (filters.maxFare) {
      query.andWhere('fare_amount <= :maxFare', {
        maxFare: filters.maxFare,
      });
    }

    if (filters.minDistance) {
      query.andWhere('trip_distance >= :minDistance', {
        minDistance: filters.minDistance,
      });
    }
    if (filters.maxDistance) {
      query.andWhere('trip_distance <= :maxDistance', {
        maxDistance: filters.maxDistance,
      });
    }

    if (filters.paymentType) {
      query.andWhere('payment_type = :paymentType', {
        paymentType: filters.paymentType,
      });
    }

    query.orderBy('yellow_taxi_trips.pickup_datetime', 'DESC');

    let page = filters.page ?? 1;
    let limit = filters.limit ?? 100;

    query.skip((page - 1) * limit).take(limit);

    const [results, total] = await query.getManyAndCount();
    const totalPages = Math.ceil(total / limit);
    return new PaginationDto(results, total, page, totalPages, limit);
  }

  async findOne(id: number): Promise<Trips> {
    return await this.yellowTaxiTripRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.yellowTaxiTripRepository.delete(id);
  }

  async finds(take = 10): Promise<Trips[]> {
    return this.yellowTaxiTripRepository.find({
      take: take,
    });
  }
}
