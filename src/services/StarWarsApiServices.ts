import axios from "axios";

import { Results } from "../models/People";

export function fetchPerson(id:number):Promise<Results>{
    return axios.get(`https://swapi.dev/api/people/${id}`,)
    .then(response=>response.data)
}
