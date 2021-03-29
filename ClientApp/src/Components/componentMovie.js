import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import './componentMovie.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SearchIcon from '@material-ui/icons/Search';
import EditMovie from '../Pages/EditMovie/editMovie'
import SettingsIcon from '@material-ui/icons/Settings';
export const MovieContext = React.createContext()

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
            <div className="bg__item" style={{ backgroundImage: `url(${movie.picture})` }}>
                <MovieContext.Provider value={{movie}}>
                    {console.log(movie)}
                    <Nav.Link href="/infoMovie"><SearchIcon className="icon__search" style={{ fontSize: 60 }} /></Nav.Link>
                    <Nav.Link href="/editMovie"><SettingsIcon className="icon__search" style={{ fontSize: 60 }} /></Nav.Link>
                    <EditMovie/>
                </MovieContext.Provider>




                <DeleteOutlinedIcon className="icon__delete" onClick={() => DeleteItem(movie.id)} style={{ fontSize: 60 }} /><p />
                <div className="field__text">
                    <h1 className="text__place">{movie.name}</h1>
                    <h2 className="text__country">{movie.releaseDate}</h2>
                </div>
            </div>
        </>
    )
}

export default Movie;