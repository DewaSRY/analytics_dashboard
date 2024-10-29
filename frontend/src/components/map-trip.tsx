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
        style={{ height: "100vh", width: "100%" }}
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
                  <p>Fare: ${trip.fare_amount}</p>
                  <p>Distance: {trip.trip_distance} miles</p>
                  <p>Payment Type: {trip.payment_type}</p>
                </div>
              </Tooltip>
            </Polyline>
          ))}
      </MapContainer>
    </>
  );
}
