import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Weather } from "./components/pages/Weather";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search-weather", element: <Weather /> },
  { path: "/search-weather/:city" },
]);
