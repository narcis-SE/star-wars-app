import { Results } from "../models/People";
import { Result } from "./Results";



export interface Props{
    results: Results[];
}

export const ResultList = ({results}:Props)=>{



    return(
        <div className="ResultList">
            {results.map((results,i) => <Result key={i} result={results} />)}
        
        </div>
    )
}