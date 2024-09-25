import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export const Counter = () => {
  const { counter, increase, decrease, reset } = useContext(AppContext);
 
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
