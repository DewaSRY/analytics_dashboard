# Project Setup Guide

![tumbnail](./docs//tumbnail.png "Tumbnail")

- [The app link](https://quiet-bubblegum-fa95a2.netlify.app/)

## Prerequisites

- **Node.js** and **npm**
- **PostgreSQL** with **PostGIS** extension (optional for spatial data)

# local setup

### simple setup

if only want to know how the app look like just run the frontend and use the railway url, it's will work correctly

### setup assets

on `databases/assets.zip` it's a compres file, please unzip it to get the data use to run the app ("it's is optional, because if only want to see what the app look like just run the forntend with, the railway server ")

### data setup

there is two way to setup data

1. restore the dumpdata use the pgadmin, (in my local and on the damp at lest contain 2.8 million record)
2. insert the data by run the python scrip, just unzip the cvs and put it on root ow python working directory. then run the command `poetry run python .\main.py`. when i run it on first time i get 2.8 million record but, when i run it for my postgres in cloud, ('i Have problem to insert the dump so i use the script') i am olny get 38.000 record

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
     psql -U username -d taxi_trip_data -f dump-yellow_taxi_trips-202410291323.sql
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
