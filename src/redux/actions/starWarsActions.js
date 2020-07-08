import * as types from "./actionTypes";
import * as starWarsAPI from "../../api/starWarsApi";

export function loadCharacters() {
  return function (dispatch) {
    return starWarsAPI
      .getCharacters()
      .then(({ results }) => {
        dispatch(characterListData(results));
      })
      .catch((error) => {
        dispatch(failedCharactersListLoad());
        throw error;
      });
  };
}

export function loadMovieDetails(moviesUrls) {
  return (dispatch) => {
    return Promise.all(
      moviesUrls.map((movieUrl) => starWarsAPI.getMovie(movieUrl))
    )
      .then((movies) => dispatch(movieDetails(movies)))
      .catch((error) => {
        dispatch(failedMovieDetailsLoad());
        throw error;
      });
  };
}
export function characterListData(data) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, data };
}

export function failedCharactersListLoad() {
  return { type: types.LOAD_CHARACTERS_FAIL };
}
export function movieDetails(data) {
  return { type: types.LOAD_MOVIE_DETAILS_SUCCESS, data };
}
export function failedMovieDetailsLoad() {
  return { type: types.LOAD_MOVIE_DETAILS_FAIL };
}
