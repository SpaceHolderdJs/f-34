import { FC } from "react";

type Props = {
    car: string,
    index: number,
    removeCar: (car: string) => void;
}

export const CarCard: FC<Props> = ({car, index, removeCar}) => {
    
  return (
    <div key={`${car}-${index}`} className="car-card">
      <h2>{car}</h2>
      <button onClick={() => removeCar(car)}>Remove This Car</button>
    </div>
  );
};
