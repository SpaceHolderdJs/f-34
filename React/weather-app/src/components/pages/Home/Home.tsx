import { useEffect } from "react";
import { useWeather } from "../../../hooks/useWeather";
import "./Home.css";

export const Home = () => {
    const {getByCityName} = useWeather();

    useEffect(() => {
        getByCityName("Kyiv").then((res) => console.log(res));
    }, [])

  return <div>Home</div>;
};
