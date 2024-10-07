import { useContext, useEffect } from "react";
import { useWeather } from "../../../hooks/useWeather";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { WeatherCard } from "../common/WeatherCard";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import { format } from "date-fns";
import { useGeolocationWebAPI } from "../../../hooks/useGeolocationWebAPI";

export const ForecastView = () => {
  const { forecastWeather, setForecastWeatherData } =
    useContext(WeatherContext)!;

  const { getWeatherForecast } = useWeather();
  const coords = useGeolocationWebAPI();

  useEffect(() => {
    if (coords) {
      getWeatherForecast(coords.lat, coords.lon).then((data) =>
        setForecastWeatherData(data)
      );
    }
  }, [coords, getWeatherForecast, setForecastWeatherData]);

  if (!forecastWeather) return null;

  const { city, list } = forecastWeather;

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-full">
      <h1 className="font-bold text-xl">
        {city.name}, {city.country}
      </h1>
      <p>
        {city.coord.lat}, {city.coord.lon}
      </p>

      <div className="w-full p-[15px] flex flex-row items-center max-w-[90%] overflow-auto">
        <Timeline horizontal>
          {list.map((data) => (
            <Timeline.Item key={data.dt}>
              <Timeline.Point icon={HiCalendar} />
              <Timeline.Content>
                <Timeline.Time className="font-bold text-gray-600">
                  {format(data.dt_txt, "dd.MM.yyyy, HH:mm a")}
                </Timeline.Time>
                <Timeline.Body>
                  <WeatherCard
                    key={data.dt}
                    weather={{ ...data, name: city.name }}
                  />
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  );
};
