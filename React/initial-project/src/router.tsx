import { createBrowserRouter } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Cars } from "./components/Cars";
import { Users } from "./components/Users";
import { App } from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cars", element: <Cars /> },
  { path: "/counter", element: <Counter /> },
  { path: "/users", element: <Users /> },
]);
