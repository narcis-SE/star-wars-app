import React, { useEffect, useState } from "react";
import { Results } from "../models/People";
import { fetchPerson } from "../services/StarWarsApiServices";
import { ResultList } from "./ResultList";


export interface MainProp{
    result: Results[]
}


export function Main(){
    const [people, setPeople] = useState<Results[]>([]);


    useEffect(()=>{
        fetchPerson().then(
            response=>setPeople(response)
        )
    }, [])

    return(
        <div className="Main">
            <ResultList results={people}/>

        </div>
    )
}