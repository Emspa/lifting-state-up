import { useState } from "react";
import { Animal } from "../models/Animal"

interface IShowAnimalProps {
    animal: Animal;
    increseCutenessLevel: (name: string) => void;
    decreaseCutenessLevel: (name: string) => void;
}

export const ShowAnimal = (props: IShowAnimalProps) => {


    const handleIncreaseClick = () => {
        props.increseCutenessLevel(props.animal.name);

    }

    const handleDecreaseClick = () => {
        props.decreaseCutenessLevel(props.animal.name);

    }

    return(
        <div>
            <h4>{props.animal.name}</h4>
            <p>Age: {props.animal.age}</p>
            <p>Cuteness level: {props.animal.cutenessLevel}</p>
            <button onClick={handleIncreaseClick}>Increase Cuteness level</button>
            <button onClick={handleDecreaseClick}>Decrease Cuteness level</button>
      
        </div>
    )
}