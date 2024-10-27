import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MapComponent from "./components/MapComponent";

import { tripLoader } from "./trip.loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MapComponent />,
    loader: tripLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
