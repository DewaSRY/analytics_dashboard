Here's an updated README without the cloning instructions:

---

# Taxi Trip Data API Backend

This backend API provides endpoints for fetching and filtering NYC taxi trip data, including trip routes, fare amounts, trip times, and payment types. Built with NestJS, it supports efficient querying of large datasets stored in a PostgreSQL database with optional PostGIS for spatial data handling.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Database Setup](#database-setup)
- [Notes](#notes)

---

## Features

- Retrieves trip data with details like fare, time, distance, and payment type.
- Provides filtering options based on various parameters for dynamic data exploration.
- Optimized for handling large datasets with PostgreSQL.

## Tech Stack

- **Backend Framework**: NestJS
- **Database**: PostgreSQL with optional PostGIS extension

## Folder Structure

```plaintext
src
├── entities            # Database entities for ORM mapping
├── filter-options      # Modules for filter options (e.g., payment type, fare ranges)
├── model               # Data models and schemas
├── request             # Request DTOs (Data Transfer Objects) for API validation
├── response            # Response DTOs for structuring API responses
└── trips               # Trip-related logic and services
```

---

## Setup Instructions

### Prerequisites

- **Node.js** and **npm**
- **PostgreSQL** (with optional PostGIS extension)

### Installation

1. **Navigate to the backend folder** and install dependencies:

   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables** (see [Environment Variables](#environment-variables) below).

3. **Start the server**:

   ```bash
   npm run start:dev
   ```

   The backend API server will be running on `http://localhost:3000`.

---

## Environment Variables

Create a `.env` file in the backend root directory with the following environment variables:

```env
DATABASE_URL=postgres://username:password@localhost:5432/taxi_trip_data
PORT=3000
```

- `DATABASE_URL`: Connection string for PostgreSQL database.
- `PORT`: Port number for the backend server (default is `3000`).

---

## API Endpoints

- **GET /trip** - Retrieves all trip data.
- **GET /filter-options/payment-types** - Retrieves available payment types for filtering.
- **GET /filter-options/fare-amounts** - Retrieves fare ranges for filtering.

For API testing and documentation, you can access Swagger UI at `http://localhost:3000/api` after the server is running.

---

## Database Setup

1. **Create the database** in PostgreSQL:

   ```sql
   CREATE DATABASE taxi_trip_data;
   ```

2. **Import the SQL dump** provided in the `database/` folder:

   ```bash
   psql -U username -d taxi_trip_data -f database/taxi_data_dump.sql
   ```

   Replace `username` with your PostgreSQL username.

---

## Notes

- The backend API is optimized for large datasets and efficient querying.
- The optional PostGIS extension can be used for spatial data queries if required.

---

This README provides a setup and overview for the backend API, designed for handling and filtering NYC taxi trip data efficiently.
