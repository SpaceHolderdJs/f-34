import { Header } from "../../ui/common/Header";
import { Layout } from "../../ui/common/Layout";
import { Search } from "../../ui/daily-weather/Search";
import { WeatherDetails } from "../../ui/daily-weather/WeatherDetails";

import "./Weather.css";

export const Weather = () => {
  return (
    <div>
        <Header />
        <Layout>
            <div className="w-full flex flex-col items-center">
                <Search />
                <WeatherDetails />
            </div>
        </Layout>
    </div>
  )
}
