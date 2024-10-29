import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TripService } from './trips.service';

import { Trips } from '../entities/trip.entity';

import { CreateTripsDto } from '@/request/create-trips.request.dto';
import { PaginationDto } from '@/response/paginate.response';
import { TripFilterDto } from '@/request/trips_filter.request';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { tripsExample } from './trips.swager';

@ApiTags('Taxi Trip')
@Controller('trip')
export class YellowTaxiTripController {
  constructor(private readonly TripService: TripService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Filtered trips retrieved successfully.',
    type: PaginationDto<Trips>,
    example: tripsExample,
  })
  async findAll(
    @Query() filterDto: TripFilterDto,
  ): Promise<PaginationDto<Trips>> {
    return this.TripService.findAll(filterDto);
  }

  // @Post()
  // async create(@Body() createTripDto: CreateTripsDto): Promise<Trips> {
  //   return this.TripService.create(createTripDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.TripService.remove(+id);
  // }
}
