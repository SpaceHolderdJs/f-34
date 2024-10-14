import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useAppSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { reset, setHours } from "./redux/slices/clock.slice";
import "./App.css";
import { useState } from "react";

function App() {
  const clockState = useAppSelector((state) => state.clock);
  const dispatch = useDispatch();

  const [n, setN] = useState();

  return (
    <>
      <h1>
        <button onClick={() => dispatch(setHours(10))}>{clockState.hours}</button>
        <button>{clockState.minutes}</button>
        <button>{clockState.seconds}</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
