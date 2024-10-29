import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class TripFilterDto {
  /** - Pagination data  */
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? parseInt(value, 10) : 1))
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Page number',
    example: 1,
  })
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? parseInt(value, 10) : 10))
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Limit data of records per page',
    example: 10,
  })
  limit?: number = 10;

  /** - Time (e.g., specific times of day or date range) */
  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    required: false,
    type: String,
    description: 'Start time for filtering trips',
    example: '2014-01-01T00:00:00Z',
  })
  startTime?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    required: false,
    type: String,
    description: 'End time for filtering trips',
    example: '2014-01-31T23:59:59Z',
  })
  endTime?: string;

  /** - Trip Distance (e.g., short, medium, or long trips). */
  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Minimum fare amount for filtering',
    example: 0,
  })
  minFare?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Maximum fare amount for filtering',
    example: 100,
  })
  maxFare?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Minimum distance for filtering (in miles)',
    example: 0,
  })
  minDistance?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    required: false,
    type: Number,
    description: 'Maximum distance for filtering (in miles)',
    example: 10,
  })
  maxDistance?: number;

  /** Payment Type (e.g., cash, card). */
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    required: false,
    type: String,
    description: 'Payment type for filtering',
    example: 'CRD',
  })
  paymentType?: string;
}
