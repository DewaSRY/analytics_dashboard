import { LoaderFunctionArgs } from 'react-router-dom';
import {TripsResponse} from "@/model/trips.model"
export const tripLoader = async ({ params, request, context }: LoaderFunctionArgs) => {
  // const { userId } = params;
  console.log(request, context, params)
  const filters = {
    limit: 100,
    page: 1,
  }


  // Build the query string from filters
  const queryString = new URLSearchParams(filters as any).toString();

  const response = await fetch(`http://localhost:3000/yellow-taxi-trips?${queryString}`, {
    method: 'GET', // Specify the HTTP method as GET
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
    },
  });

  if (!response.ok) throw new Error('User not found');
  
  const data = await response.json() as TripsResponse;
  console.log(data)
  return data 
};