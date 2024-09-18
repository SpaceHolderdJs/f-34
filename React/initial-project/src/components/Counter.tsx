import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  }

  // Додати функцію онулення counter та кнопку Reset
  // Кнопка має дати counter значення 0  

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
