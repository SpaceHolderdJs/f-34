import { useState } from "react";

import "../styles/Cars.css";
import { CarCard } from "./CarCard";

export const Cars = () => {
  // static info
  const allCars: string[] = ["Toyota Camry", "Ford Probe", "Lincoln MKZ"];

  // dynamic info
  const [cars, setCars] = useState<string[]>([]);

  const addCar = () => {
    const randomCar = allCars[Math.floor(Math.random() * allCars.length)];
    setCars([...cars, randomCar]);
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
        <CarCard key={`${car}-${i}`} car={car} index={i} removeCar={removeCar} />
      ))}

      <button onClick={addCar}>Add New Car</button>
      <button onClick={clearCars}>Clear Cars</button>
    </div>
  );
};
