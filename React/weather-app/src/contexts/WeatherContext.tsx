import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { TodayWeatherDataType } from "../types/todayWeatherData";
import { ForecastWeatherDataType } from "../types/forecastWeatherDataType";

type WeatherContextType = {
  weatherToday?: TodayWeatherDataType;
  setWeatherData: (data: TodayWeatherDataType) => void;
  resetWeatherData: () => void;

  forecastWeather?: ForecastWeatherDataType;
  setForecastWeatherData: (data: ForecastWeatherDataType) => void;
  resetForecastWeatherData: () => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todayWeatherData, setTodayWeatherData] = useState<
    TodayWeatherDataType | undefined
  >();

  const [forecastData, setForecastData ] = useState<ForecastWeatherDataType | undefined>();

  const setWeatherToday = useCallback((data: TodayWeatherDataType) => {
    setTodayWeatherData(data);
  }, []);

  const resetWeatherData = useCallback(() => {
    setTodayWeatherData(undefined);
  }, []);

  const setForecastWeatherData = useCallback((data: ForecastWeatherDataType) => {
    setForecastData(data);
  }, []);

  const resetForecastWeatherData = useCallback(() => {
    setForecastData(undefined);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherToday: todayWeatherData,
        setWeatherData: setWeatherToday,
        resetWeatherData: resetWeatherData,

        forecastWeather: forecastData,
        setForecastWeatherData,
        resetForecastWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
