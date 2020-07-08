import { handleResponse, handleError } from "./apiUtils";
import { CHARACTERS_API } from "./apiURL";
export function getCharacters() {
  return fetch(CHARACTERS_API).then(handleResponse).catch(handleError);
}

export function getMovie(url) {
  return fetch(url).then(handleResponse).catch(handleError);
}
