import { ComponentProps, PropsWithChildren } from "react";
import { TripsResponse } from "@/model/trips.model";
import {
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { usecontext } from "@/provider/context";
import { useLoaderData } from "react-router-dom";

interface MapComponentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MapComponent({}: MapComponentProps) {
  const { data: trips } = useLoaderData() as TripsResponse;
  const { setDropoff, setPickup, dropoff, pickup, isStoreNewCordinate } =
    usecontext();

  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        if (!pickup) {
          setPickup([event.latlng.lat, event.latlng.lng]);
        } else if (!dropoff) {
          setDropoff([event.latlng.lat, event.latlng.lng]);
        }
      },
    });
    return null;
  };

  return (
    <>
      <MapContainer
        center={[40.7128, -74.006]}
        zoom={12}
        style={{ height: "100vh", width: "100%", zIndex: 50 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {isStoreNewCordinate && <MapClickHandler />}

        {trips.length > 0 &&
          trips.map((trip) => (
            <Polyline
              key={trip.id}
              positions={[
                [trip.pickup_latitude, trip.pickup_longitude],
                [trip.dropoff_latitude, trip.dropoff_longitude],
              ]}
              color="blue"
              weight={3}
              opacity={0.7}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <div>
                <p>ID: {trip.id}</p>
                <p>Vendor ID: {trip.vendor_id}</p>
                <p>Pickup Datetime: {new Date(trip.pickup_datetime).toLocaleString()}</p>
                <p>Dropoff Datetime: {new Date(trip.dropoff_datetime).toLocaleString()}</p>
                <p>Passenger Count: {trip.passenger_count}</p>
                <p>Distance: {trip.trip_distance} miles</p>
                <p>Pickup Location: ({trip.pickup_latitude}, {trip.pickup_longitude})</p>
                <p>Dropoff Location: ({trip.dropoff_latitude}, {trip.dropoff_longitude})</p>
                <p>Store and Forward Flag: {trip.store_and_fwd_flag || 'N/A'}</p>
                <p>Payment Type: {trip.payment_type}</p>
                <p>Fare: ${trip.fare_amount.toFixed(2)}</p>
                <p>MTA Tax: ${trip.mta_tax.toFixed(2)}</p>
                <p>Tip Amount: ${trip.tip_amount.toFixed(2)}</p>
                <p>Tolls Amount: ${trip.tolls_amount.toFixed(2)}</p>
                <p>Total Amount: ${trip.total_amount.toFixed(2)}</p>
                <p>Imp Surcharge: ${trip.imp_surcharge.toFixed(2)}</p>
                <p>Extra: {trip.extra !== null ? trip.extra : 'N/A'}</p>
                <p>Rate Code: {trip.rate_code}</p>
                </div>
              </Tooltip>
            </Polyline>
          ))}
      </MapContainer>
    </>
  );
}
