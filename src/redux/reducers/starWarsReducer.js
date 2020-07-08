import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function starWarsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_CHARACTERS_SUCCESS:
      return { ...state, CharactersList: action.data };

    case types.LOAD_CHARACTERS_FAIL:
      return state;

    case types.LOAD_MOVIE_DETAILS_SUCCESS:
      return { ...state, MovieDetails: action.data };
    case types.LOAD_MOVIE_DETAILS_FAIL:
      return state;
    default:
      return state;
  }
}
