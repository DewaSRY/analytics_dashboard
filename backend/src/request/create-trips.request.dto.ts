import { IsNotEmpty, IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateTripsDto {
  @IsNotEmpty()
  @IsString()
  vendor_id: string;

  @IsNotEmpty()
  @IsDateString() // Validate as a date string in ISO format
  pickup_datetime: string; // Change type to string for compatibility with ISO format

  @IsNotEmpty()
  @IsDateString() // Validate as a date string in ISO format
  dropoff_datetime: string; // Change type to string for compatibility with ISO format

  @IsNotEmpty()
  @IsNumber()
  passenger_count: number;

  @IsNotEmpty()
  @IsNumber()
  trip_distance: number;

  @IsNotEmpty()
  @IsNumber()
  pickup_longitude: number;

  @IsNotEmpty()
  @IsNumber()
  pickup_latitude: number;

  @IsNotEmpty()
  @IsNumber()
  dropoff_longitude: number;

  @IsNotEmpty()
  @IsNumber()
  dropoff_latitude: number;

  @IsNotEmpty()
  @IsString()
  payment_type: string;

  @IsNotEmpty()
  @IsNumber()
  fare_amount: number;

  @IsNotEmpty()
  @IsNumber()
  mta_tax: number;

  @IsNotEmpty()
  @IsNumber()
  tip_amount: number;

  @IsNotEmpty()
  @IsNumber()
  tolls_amount: number;

  @IsNotEmpty()
  @IsNumber()
  total_amount: number;

  @IsNotEmpty()
  @IsNumber()
  imp_surcharge: number;

  @IsNotEmpty()
  @IsNumber() // Change to number for better alignment with migration definition
  rate_code: number;
}
