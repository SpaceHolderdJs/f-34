import { FC } from "react";
import { Button, Card, Table } from "flowbite-react";
import { TodayWeatherDataType } from "../../../types/todayWeatherData";
import { ForecastListItemWeatherType } from "../../../types/forecastWeatherDataType";
import { FaHeart } from "react-icons/fa";

type Props = {
  title?: string;
  weather:
    | TodayWeatherDataType
    | (ForecastListItemWeatherType & { name: string });
  action?: () => void;
};

export const WeatherCard: FC<Props> = ({ weather, title, action }) => {
  const {
    main: { temp, temp_min, temp_max },
    wind: { speed },
    visibility,
    name,
  } = weather;

  return (
    <Card
      className="max-w-md"
      renderImage={() => (
        <div className="flex flex-col items-center pt-2">
          {title && <h2>{title}</h2>}
          <img
            className="object-contain w-full max-h-[200px]"
            alt={name}
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
        </div>
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <article>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>

          <p>{weather.weather[0].main}</p>
        </article>

        <p>
          {temp_min} C - {temp_max} C
        </p>
      </div>

      <Table striped>
        <Table.Head>
          <Table.HeadCell>Temperature</Table.HeadCell>
          <Table.HeadCell>Visibility</Table.HeadCell>
          <Table.HeadCell>Wind</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{temp} C</Table.Cell>
            <Table.Cell>{visibility} m</Table.Cell>
            <Table.Cell>{speed} m/s</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {action && (
        <Button onClick={action}>
          <FaHeart />
        </Button>
      )}
    </Card>
  );
};
