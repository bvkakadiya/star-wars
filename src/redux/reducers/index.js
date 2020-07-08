import { combineReducers } from "redux";
import starWars from "./starWarsReducer";

const rootReducer = combineReducers({
  starWars,
});

export default rootReducer;
