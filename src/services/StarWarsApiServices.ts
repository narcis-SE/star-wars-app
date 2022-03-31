import axios from "axios";

import { Results } from "../models/People";

export function fetchPerson():Promise<Results[]>{
    return axios.get("https://swapi.dev/api/people")
    .then(response=>response.data.results)
}
