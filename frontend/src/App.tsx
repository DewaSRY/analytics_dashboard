import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { tripLoader } from "./trip.loader";
import Page from "./Page";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading map...</div>}>
        <Page />
      </Suspense>
    ),
    loader: tripLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
