import react from 'react'
import './infoMovieComponent.css'
import CancelIcon from '@material-ui/icons/Cancel';
import { Nav } from 'react-bootstrap'

const InfoMovieComponent = ({ movie }) => {
    return (

        <div className="field__info">
            <div className="icon__close">
                <Nav.Link href="/listMovie"><CancelIcon style={{ fontSize: 60 }} /> </Nav.Link>
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
    )
}

export default InfoMovieComponent