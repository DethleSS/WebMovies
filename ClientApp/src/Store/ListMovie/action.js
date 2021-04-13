import {CREATE_MOVIE, FETCH_MOVIE} from './types'

export function createMovie(movie) {
    return {
        type: CREATE_MOVIE,
        payload: movie
    }
}

export function fetchMovie() {
    return async dispatch => {
        const response = await fetch("/api/Movies", {
            method: "GET",
            headers: { "Accept": "application/json" }
          });
        const json = await response.json()
        dispatch({type: FETCH_MOVIE, payload: json})
    }
}