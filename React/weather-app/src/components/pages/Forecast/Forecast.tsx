import { Header } from "../../ui/common/Header";
import { Layout } from "../../ui/common/Layout";
import { ForecastView } from "../../ui/forecast/ForecastView";

import "./Forecast.css";

export const Forecast = () => {
  return (
    <div>
      <Header />
      <Layout>
        <ForecastView />
      </Layout>
    </div>
  );
};
