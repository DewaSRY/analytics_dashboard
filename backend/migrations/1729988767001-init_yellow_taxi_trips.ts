import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitYellowTaxiTrips1729988767001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'trips',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true, // Set the id to auto-increment
            generationStrategy: 'increment', // Use increment strategy
          },
          {
            name: 'vendor_id',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'pickup_datetime',
            type: 'timestamp', // Change from text to timestamp
            isNullable: true,
          },
          {
            name: 'dropoff_datetime',
            type: 'timestamp', // Change from text to timestamp
            isNullable: true,
          },
          {
            name: 'passenger_count',
            type: 'bigint',
            isNullable: true,
          },
          {
            name: 'trip_distance',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'pickup_longitude',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'pickup_latitude',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'store_and_fwd_flag',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'dropoff_longitude',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'dropoff_latitude',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'payment_type',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'fare_amount',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'mta_tax',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'tip_amount',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'tolls_amount',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'total_amount',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'imp_surcharge',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'extra',
            type: 'double precision',
            isNullable: true,
          },
          {
            name: 'rate_code',
            type: 'bigint',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('yellow_taxi_trips');
  }
}
