// src/data-source.ts
import { DataSource } from 'typeorm';
import { Trips } from './entities/trip.entity'; // Adjust the import path as needed

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_DATABASE || 'yellow_taxi_trips',
  entities: [Trips],
  migrations: ['./dist/migrations/*.js'], // Point to the compiled .js files
  synchronize: false,
});
