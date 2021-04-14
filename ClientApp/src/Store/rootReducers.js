import { combineReducers } from "redux";
import { appReducer } from "./App/reducers";
import { movieReducer } from "./Movie/reducers";

export const rootReducer = combineReducers({
    movies: movieReducer,
    app: appReducer
})