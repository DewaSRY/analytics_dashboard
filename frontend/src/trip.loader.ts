import { LoaderFunctionArgs } from "react-router-dom";
import { TripsResponse } from "@/model/trips.model";

export const tripLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/trip?${queryParams}`,
    {
      method: "GET", // Specify the HTTP method as GET
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
    }
  );

  if (!response.ok) throw new Error("Trip");

  const data = (await response.json()) as TripsResponse;

  return data;
};
