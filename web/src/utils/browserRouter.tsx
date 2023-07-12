import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CarDetails from "../pages/CarDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/car/:id",
    element: <CarDetails />,
    errorElement: <NotFound />
  }
]);

