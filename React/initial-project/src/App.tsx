import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { router } from "./router";

import "./App.css";
import { UserType } from "./types/users.types";
import { Clock } from "./components/Clock";

export const App = () => {
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => setNumber(number + 1), 1000);
  }, [number]);

  const defaultUser = useRef<Partial<UserType>>({
    name: "Default",
    username: "User name",
  });

  console.log(bottomSectionRef.current);

  useEffect(() => {
    console.log(bottomSectionRef, "appRef");

    defaultUser.current.id = 1;
    defaultUser.current.username = "Oleg";

    console.log(defaultUser, "defaultUser");

    bottomSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);


  // useMemo
  const name = useMemo(() => number > 5 ? "User" : "Admin", [number]);
  
  console.log(name);

  // useCallback
  const onClick = useCallback((value: number) => {
    alert(`Hello ${value}`);
  }, []);

  return (
    <div className="App">
      {router.routes.map((route) => (
        <Link key={route.path} to={route.path || "/"}>
          {route.path === "/" ? "app" : route.path?.replace("/", "")}
        </Link>
      ))}

      <h2 onClick={() => onClick(10)}>Count: {number}</h2>

      <div ref={bottomSectionRef} className="bottom-section">
        <h3>Bottom Section {defaultUser.current.username}</h3>
      </div>

      <Clock />
    </div>
  );
};
