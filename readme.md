# Project Setup Guide

## Prerequisites

- **Node.js** and **npm**
- **PostgreSQL** with **PostGIS** extension (optional for spatial data)

## Steps

### 1. Backend Setup

1. **Navigate to the backend folder**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**: Create a `.env` file with the following:

   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/taxi_trip_data
   PORT=3000
   ```

4. **Set up the database**:

   - Create the database in PostgreSQL:
     ```sql
     CREATE DATABASE taxi_trip_data;
     ```
   - Import the SQL dump file:
     ```bash
     psql -U username -d taxi_trip_data -f database/taxi_data_dump.sql
     ```

5. **Start the backend server**:

   ```bash
   npm run start:dev
   ```

   The backend will be running at `http://localhost:3000`.

### 2. Frontend Setup

1. **Navigate to the frontend folder**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend server**:

   ```bash
   npm run dev
   ```

   The frontend will be running, and you can access it at `http://localhost:5173` (or the port specified by Vite).
