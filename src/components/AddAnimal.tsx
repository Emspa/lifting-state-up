/** @format */

import { ChangeEvent, useState } from "react";

interface IAddAnimalProps {
  addAnimal: (theNewAnimal: string) => void;
}

export const AddAnimal = (props: IAddAnimalProps) => {
  const [newAnimal, setNewAnimal] = useState("");

  const handleClick = () => {
    props.addAnimal(newAnimal);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAnimal(e.target.value);
  };
  return (
    <div>
      <input type="text" value={newAnimal} onChange={handleChange} />
      <button onClick={handleClick}>Spara</button>
    </div>
  );
};
