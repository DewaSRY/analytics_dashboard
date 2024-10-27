import { ComponentProps, PropsWithChildren } from "react";
import { Trip } from "@/model/trips.model";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Polyline,
//   Tooltip,
// } from "react-leaflet";

// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import {
//     MapContainer,
//     TileLayer,
//     useMap,
// } from 'https://cdn.esm.sh/react-leaflet'

interface MapComponentProps extends ComponentProps<"div">, PropsWithChildren {
  trips: Trip[];
}

export default function MapComponent({
  children,
  trips,
  ...resProps
}: MapComponentProps) {
  return (
    <MapContainer
      center={[40.7128, -74.006]} // Centered on NYC
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {trips.map((trip) => (
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
    // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
  );
}
