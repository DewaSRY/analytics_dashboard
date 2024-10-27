import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mantine/core";
import FilterComponent from "./components/FilterComponent";
import MapComponent from "./components/MapComponent";
import { filters } from "@/model/filters.mode";
import { TripsResponse, Trip } from "@/model/trips.model";

function App() {
  const [trips, setTrips] = useState<Trip[]>([]);

  const fetchTrips = async (filters: filters) => {
    try {
      const queryString = new URLSearchParams(
        Object.entries(filters).reduce((acc, [key, value]) => {
          if (value !== undefined) acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString();

      const response = await fetch(
        `http://localhost:3000/yellow-taxi-trips?${queryString}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = (await response.json()) as TripsResponse;
      console.log(data);
      setTrips(data.data);
      console.log(trips);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  // Fetch trips with default parameters on mount
  useEffect(() => {
    fetchTrips({ page: 1, limit: 100 });
  }, []);

  return (
    <Router>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FilterComponent onFilterChange={fetchTrips} />
                <MapComponent trips={trips} />
              </>
            }
          />
          <Route
            path="/trips"
            element={
              <>
                <FilterComponent onFilterChange={fetchTrips} />
                <MapComponent trips={trips} />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

// interface MapComponentProps {
//   trips: Trip[];
// }

// const MapComponent: React.FC<MapComponentProps> = ({ trips }) => {
//   return (
//     <MapContainer
//       center={[40.7128, -74.006]} // New York City coordinates as an example
//       zoom={12}
//       style={{ height: "100vh", width: "100%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {trips.map((trip) => (
//         <Polyline
//           key={trip.id}
//           positions={[
//             [trip.startLat, trip.startLng],
//             [trip.endLat, trip.endLng],
//           ]}
//           color="blue"
//           weight={3}
//           opacity={0.7}
//         >
//           <Tooltip direction="top" offset={[0, -10]} opacity={1}>
//             <span>Fare: ${trip.fare}</span>
//             <br />
//             <span>Distance: {trip.distance} miles</span>
//             <br />
//             <span>Payment Type: {trip.paymentType}</span>
//           </Tooltip>
//         </Polyline>
//       ))}
//     </MapContainer>
//   );
// };

export default App;
