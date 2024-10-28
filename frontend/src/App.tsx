import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MapComponent from "./components/MapComponent";

import { tripLoader } from "./trip.loader";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading map...</div>}>
        <MapComponent />
      </Suspense>
    ),
    loader: tripLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
