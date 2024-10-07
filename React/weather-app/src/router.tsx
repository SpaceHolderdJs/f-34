import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Weather } from "./components/pages/Weather";
import { Forecast } from "./components/pages/Forecast";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search-weather", element: <Weather /> },
  { path: "/forecast", element: <Forecast /> },
  { path: "/search-weather/:city" },
]);
