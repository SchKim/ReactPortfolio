import { baseUrl } from "./baseUrl";
import { IWorks } from "./IWork";


export function fetchWorks() : Promise<IWorks[]> {
    return fetch(baseUrl + " works")
    .then(response => response.json())
    .then(works => works);
}
