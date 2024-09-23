import { Link } from "react-router-dom";
import "./App.css";
import { router } from "./router";

export const App = () => {
  return (
    <div className="App">
      {router.routes.map((route) => (
        <Link key={route.path} to={route.path || "/"}>
          {route.path === "/" ? "app" : route.path?.replace("/", "")}
        </Link>
      ))}
    </div>
  );
};
