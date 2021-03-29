import React from 'react'
import './componentMovie.css'
const Movie = ({ movie }) => {

    async function DeleteItem(id) {
        const response = await fetch("/api/Movies/" + id, {
            method: "DELETE",
            headers: { "Accept": "application/json" }
        });
        if (response.ok === true) {
            window.location.reload(); 
            
        }
        
    }

    return (
        <>
        <button onClick={() => DeleteItem(movie.id)}>Удалить фильм</button>

        <div className="bg__item" style={{ backgroundImage: `url(${movie.picture})` }}>
            <div className="field__text">
                <h1 className="text__place">{movie.name}</h1>
                <h2 className="text__country">{movie.releaseDate}</h2>
            </div>
        </div>
        </>
    )
}

export default Movie;