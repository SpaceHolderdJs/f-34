import { Button, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { useWeather } from "../../../hooks/useWeather";
import { useCallback, useContext, useState } from "react";
import { WeatherContext } from "../../../contexts/WeatherContext";

export const Search = () => {
  const { getByCityName } = useWeather();
  const { setWeatherData } = useContext(WeatherContext)!;

  // two way binding
  const [value, setValue] = useState("");

  const onSearch = useCallback(async () => {
    const dailyWeatherData = await getByCityName(value);
    setWeatherData(dailyWeatherData);
    setValue("");
  }, [getByCityName, setWeatherData, value]);

  return (
    <div className="flex flex-row w-max items-center gap-3">
      <TextInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        icon={FaSearch}
        placeholder="Search by location"
        required
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};
