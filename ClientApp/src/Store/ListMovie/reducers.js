import {CREATE_MOVIE, FETCH_MOVIE} from './types'

const initialState = ({
    movies: [1,2,3]
})

export const movieReducer = (state = initialState, action) => {

    switch(action.type){
        case CREATE_MOVIE:
            return{...state, movies: state.movies.concat([action.payload])}
        case FETCH_MOVIE:
            return {...state, movies: action.payload}
        default: return state
    }
}