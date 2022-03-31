import React, { useEffect, useState } from "react";
import { Results } from "../models/People";
import { fetchPerson } from "../services/StarWarsApiServices";
import { ResultList } from "./ResultList";
import { Result } from "./Results";


export interface MainProp{
    result: Results
}


export function Main(){
    const [people, setPeople] = useState<Results>();

    function getRandomArbitrary(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
      }

    useEffect(()=>{
        fetchPerson(getRandomArbitrary(1,10)).then(
            response=>setPeople(response)
        )
    }, [])

    return(
        <div className="Main">
            <h1>hello{people?.birth_year}</h1>

        </div>
    )
}