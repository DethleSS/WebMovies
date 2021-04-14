import { CREATE_MOVIE, FETCH_MOVIES, FETCH_MOVIE_BY_ID, DELETE_MOVIE_BY_ID, EDIT_MOVIE } from './types'

const initialState = ({
    movies: []
})

export const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_MOVIE:
            return { ...state, movies: state.movies.concat([action.payload]) }
        case FETCH_MOVIES:
            return { ...state, movies: action.payload }
        case FETCH_MOVIE_BY_ID:
            return { ...state, movies: action.payload }
        case DELETE_MOVIE_BY_ID:
            return { ...state, movies: action.payload }
        case EDIT_MOVIE:
            return { ...state, movies: action.payload }
        default: return state
    }
}