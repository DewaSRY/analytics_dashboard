import { Trips } from '@/entities/trip.entity';
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

import { DataResponse } from '@/response/data.response';
import { TripStatisticData, Options } from '@/model/util';

@ApiTags('Filter Options')
@Controller('filter-options')
export class FilterOptionsController {
  constructor(
    @InjectRepository(Trips) private readonly tripRepository: Repository<Trips>,
  ) {}

  @Get('payment-types')
  getDistinctPaymentTypes(): DataResponse<Options[]> {
    return {
      data: [
        {
          label: 'Credit card',
          value: 'CRD',
        },
        {
          label: 'Cash',
          value: 'CSH',
        },
        {
          label: 'Dispute',
          value: 'DIS',
        },
        {
          label: 'No charge ',
          value: 'NOC',
        },
        {
          label: 'Unknown',
          value: 'UNK',
        },
      ],
    };
  }

  @Get('statistic-data')
  async getStatisticData(): Promise<DataResponse<TripStatisticData>> {
    const result = (await this.tripRepository.query(
      `
        WITH filtered_trips AS (
            SELECT *
            FROM trips         
        )
        SELECT 
            MIN(fare_amount) AS minFare,
            MAX(fare_amount) AS maxFare,
            MIN(trip_distance) AS min_distance,
            MAX(trip_distance) as max_distance,
            MIN(pickup_datetime) AS min_pickup_datetime,
            MAX(pickup_datetime) AS max_pickup_datetime,
            COUNT(*) AS totalTrips
        FROM filtered_trips;
      `,
    )) as [TripStatisticData];

    return {
      data: result[0],
    };
  }
}
