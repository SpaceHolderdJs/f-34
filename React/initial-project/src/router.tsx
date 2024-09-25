import { createBrowserRouter, Link } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Cars } from "./components/Cars";
import { Users } from "./components/Users";
import { App } from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cars", element: <Cars /> },
  {
    path: "/counter-2",
    element: (
      <>
        <h1>Counter 2</h1>
        <Link to="/counter">Counter</Link>
        <Counter />
      </>
    ),
  },
  {
    path: "/counter",
    element: (
      <>
        <h1>Counter</h1>
        <Link to="/counter-2">Counter-2</Link>
        <Counter />
      </>
    ),
  },
  { path: "/users", element: <Users /> },
]);
