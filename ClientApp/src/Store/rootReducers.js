import { combineReducers } from "redux";
import { movieReducer } from "./ListMovie/reducers";

export const rootReducer = combineReducers({
    movies: movieReducer 
})