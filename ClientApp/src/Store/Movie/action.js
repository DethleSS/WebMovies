import { hideLoader, showLoader } from '../App/action';
import {CREATE_MOVIE, FETCH_MOVIES, FETCH_MOVIE_BY_ID, DELETE_MOVIE_BY_ID, EDIT_MOVIE} from './types'

export function createMovie(movie) {
    return {
        type: CREATE_MOVIE,
        payload: movie
    }
}

export function fetchMovies() {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch("/api/Movies", {
            method: "GET",
            headers: { "Accept": "application/json" }
          });
        const json = await response.json()
        dispatch({type: FETCH_MOVIES, payload: json})
        dispatch(hideLoader())
    }
}

export function fetchMoviesById(idMovie) {
    return async dispatch => {
        dispatch(showLoader())
        const response = await fetch("/api/Movies" + idMovie, {
            method: "GET",
            headers: { "Accept": "application/json" }
          });
        const json = await response.json()
        dispatch({type: FETCH_MOVIE_BY_ID, payload: json})
        dispatch(hideLoader())
    }
}

export function deleteMoviesById(idMovie) {

    return async dispatch => {
        const response = await fetch("/api/Movies/" + idMovie, {
            method: "DELETE",
            headers: { "Accept": "application/json" }
        });
        if (response.ok === true) {
            window.location.reload();

        }
        const json = await response.json()
        dispatch({type: DELETE_MOVIE_BY_ID, payload: json})
        
        
    }
}

export function EditMovies(movie) {

    return async dispatch => {
        const response = await fetch('/api/Movies', {method: 'PUT', body: {...movie}, "Accept": "application/json"})
        const json = await response.json()
        dispatch({type: EDIT_MOVIE, payload: json})    
    }
}