import { useState } from "react";
import { CarCard } from "./CarCard";

import "../styles/Cars.css";

export const Cars = () => {
  // static info
  const allCars: string[] = ["Toyota Camry", "Ford Probe", "Lincoln MKZ"];

  // dynamic info
  const [cars, setCars] = useState<string[]>([]);

  const addCar = (car: string) => {
    setCars([...cars, car]);
  };

  const removeCar = (car: string) => {
    const updatedCars = cars.filter((carName) => carName !== car);
    setCars(updatedCars);
  };

  const clearCars = () => setCars([]);

  return (
    <div className="cars-wrapper">
      <h1>Cars</h1>

      {cars.map((car, i) => (
        <CarCard
          key={`${car}-${i}`}
          car={car}
          index={i}
          removeCar={removeCar}
        />
      ))}

      <div style={{ display: "flex" }}>
        {allCars.map((car) => (
          <button key={car} onClick={() => addCar(car)}>{car}</button>
        ))}
      </div>

      <button onClick={clearCars}>Clear Cars</button>
    </div>
  );
};
