import { useContext } from "react";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { WeatherCard } from "../common/WeatherCard";

export const WeatherDetails = () => {
  const { weatherToday } = useContext(WeatherContext)!;

  if (!weatherToday) return null;

  const onLikeWeatherLocation = () => {
    alert("Add your code here");
  }

  return <div className="w-max flex flex-row m-5">
    <WeatherCard weather={weatherToday} action={onLikeWeatherLocation} />
  </div>;
};
