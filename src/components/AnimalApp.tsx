/** @format */

import { useState } from "react";
import { Animal } from "../models/Animal";
import { ShowAnimal } from "./ShowAnimal";
import { AddAnimal } from "./AddAnimal";

export const AnimalApp = () => {
  const [animals, setAnimals] = useState<Animal[]>([
    new Animal("Panda", 5, 0),
    new Animal("Lion", 2, 0),
    new Animal("Pinguine", 4, 0),
  ]);

  const increaseCutenessLevel = (name: string) => {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, cutenessLevel: animal.cutenessLevel + 1 };
        } else {
          return animal;
        }
      })
    );
  };

  const decreaseCutenessLevel = (name: string) => {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === name && animal.cutenessLevel > 0) {
          return { ...animal, cutenessLevel: animal.cutenessLevel - 1 };
        } else {
          return animal;
        }
      })
    );
  };

  const addAnimal = (theNewAnimal: string) => {
    setAnimals([...animals, new Animal(theNewAnimal, 0, 0)]);
  };

  return (
    <div>
      <h2>Cute animals</h2>
      <AddAnimal addAnimal={addAnimal}/>
      {animals.map((animal) => {
        return (
          <ShowAnimal
            animal={animal}
            increseCutenessLevel={increaseCutenessLevel}
            decreaseCutenessLevel={decreaseCutenessLevel}
            key={animal.name}
          />
        );
      })}
    </div>
  );
};
