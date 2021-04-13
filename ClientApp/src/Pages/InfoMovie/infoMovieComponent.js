import {useState, useEffect} from 'react'
import './infoMovieComponent.css'
import CancelIcon from '@material-ui/icons/Cancel';
import { NavLink } from 'react-router-dom'

const InfoMovieComponent = () => {

    const [idMovie, setIdMovie] = useState(document.location.pathname.match(/[0-9]+/g))
    const [movie, setMovie] = useState()

    useEffect(async () => {
        const response = await fetch("/api/Movies/" + idMovie, {
          method: "GET",
          headers: { "Accept": "application/json" }
        });
        const data = await response.json()
        setMovie(data)
      }, [])

    return (
<div>
      {movie ?
        <div>
          <div className="field__info">
            <div className="icon__close">
                <NavLink to={"/listMovie"}><CancelIcon style={{ fontSize: 60 }} /> </NavLink>
            </div>

            <div className="bg__field" style={{ backgroundImage: `url(${movie.picture})` }} />
            <div className="ditails__field">
                <h1>Name: {movie.name}</h1>
                <h1>ReleaseDate: {movie.releaseDate}</h1>
                <h1>Genre: {movie.genre[0].nameGenre}</h1>
                <h2>Author</h2>
                <h1>FirstName: {movie.author[0].firstName}</h1>
                <h1>SecondName: {movie.author[0].secondName}</h1>
            </div>
            <div className="author__field" style={{ backgroundImage: `url(${movie.author[0].photo})` }} />
        </div>
        </div>

        : <h1>loading</h1>}
    </div>
        
    )
}

export default InfoMovieComponent