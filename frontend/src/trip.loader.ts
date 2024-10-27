import { LoaderFunctionArgs } from 'react-router-dom';
import {TripsResponse} from "@/model/trips.model"
export const tripLoader = async ({ params, request, context }: LoaderFunctionArgs) => {
  // const { userId } = params;
  console.log(request, context, params)
  const filters = {
    limit: 100,
    page: 1,
  }
  const response = await fetch(`http://localhost:3000/yellow-taxi-trips`, {
    body: JSON.stringify(filters)
  });
  if (!response.ok) throw new Error('User not found');
  
  const data = await response.json() as TripsResponse;
  return data 
};