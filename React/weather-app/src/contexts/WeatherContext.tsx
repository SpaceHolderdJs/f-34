import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { TodayWeatherDataType } from "../types/todayWeatherData";

type WeatherContextType = {
  weatherToday?: TodayWeatherDataType;
  setWeatherData: (data: TodayWeatherDataType) => void;
  resetWeatherData: () => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todayWeatherData, setTodayWeatherData] = useState<
    TodayWeatherDataType | undefined
  >();

  const setWeatherToday = useCallback((data: TodayWeatherDataType) => {
    setTodayWeatherData(data);
  }, []);

  const resetWeatherData = useCallback(() => {
    setTodayWeatherData(undefined);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherToday: todayWeatherData,
        setWeatherData: setWeatherToday,
        resetWeatherData: resetWeatherData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
