# Vite React Application Setup

This guide will walk you through setting up the Vite React application for local development.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)

## Getting Started

1. **Install Dependencies**

   Run the following command in your project directory to install the necessary dependencies:

   ```bash
   npm install
   ```

2. **Set Up Environment Variables**

   Create a `.env` file in the root of your project and define the `VITE_API_URL` variable. This variable should contain the base URL of your API.

   ```plaintext
   # get from localhost
   VITE_API_URL=localhost:3000

    # get from hostted server
    VITE_API_URL=https://analyticsdashboard-production.up.railway.app
   ```

   Replace `https://api.example.com` with your actual API URL.

3. **Start the Development Server**

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

   By default, the app will be accessible at [http://localhost:5173](http://localhost:5173).

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Serves the production build locally.
