import { Results } from "../models/People";

interface ResultProp{
    result: Results
}

export const Result = ({result}:ResultProp)=>{

    return(
        <div className="Result">

            <h1>{result.name}</h1>
            <h2>{result.homeworld}</h2>
            <ul>
                <li>{result.gender}</li>
                <li>{result.height}</li>
                <li>{result.birth_year}</li>
            </ul>
        </div>
    )
}