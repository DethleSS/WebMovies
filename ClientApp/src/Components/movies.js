import React from 'react'
import Movie from './componentMovie'
import AddMovie from './addComponentMovie'
import './movies.css'

const Movies = ({ movies }) => {

    return (
        <div className="item__element">
            {movies.map(dataMovie => <Movie key={dataMovie.id} movie={dataMovie} />)}
            <AddMovie length={movies.length}/>
        </div>


    )
}

export default Movies;