import "./App.css";
import { Cars } from "./components/Cars";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div>
      <Counter />
      <Cars />
    </div>
  );
};
