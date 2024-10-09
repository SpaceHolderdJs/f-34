import { useReducer } from "react";

type ClockType = {
  minutes: number;
  seconds: number;
  hours: number;
};

type ActionType = {
  type: string;
  payload: number;
};

const clockReducer = (data: ClockType, action: ActionType) => {
  switch (action.type) {
    case "SET_HOURS": {
      return { ...data, hours: action.payload };
    }

    default: {
      return data;
    }
  }
};

export const Clock = () => {
  const [data, dispatch] = useReducer(
    clockReducer,
    { minutes: 0, seconds: 0, hours: 0 }
    // () => ({ minutes: 0, seconds: 0, hours: 0 })
  );

  return (
    <div>
      <div>
        {data.hours}:{data.minutes}:{data.seconds}
      </div>
      <button onClick={() => dispatch({ type: "SET_HOURS", payload: 10 })}>
        Change hours to 10
      </button>
    </div>
  );
};
