import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import './componentMovie.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SearchIcon from '@material-ui/icons/Search';
import EditMovie from '../Pages/EditMovie/editMovie'
import InfoMovie from '../Pages/InfoMovie/infoMovieComponent'
import SettingsIcon from '@material-ui/icons/Settings';

const Movie = ({ movie }) => {

    const [isInfo, setIsInfo] = useState(Boolean)
    const [isEdit, setIsEdit] = useState(Boolean)

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
        
            {isInfo ? <InfoMovie movie={movie} /> :
            <div className="bg__item" style={{ backgroundImage: `url(${movie.picture})` }}>
                {isEdit ? <EditMovie movie={movie}/> : null}
                    <SearchIcon className="icon__search" style={{ fontSize: 60 }} onClick={() => setIsInfo(1)}/>

                    <SettingsIcon className="icon__search" style={{ fontSize: 60 }} onClick={() => setIsEdit(1)}/>


                <DeleteOutlinedIcon className="icon__delete" onClick={() => DeleteItem(movie.id)} style={{ fontSize: 60 }} /><p />
                <div className="field__text">
                    <h1 className="text__place">{movie.name}</h1>
                    <h2 className="text__country">{movie.releaseDate}</h2>
                </div>
            </div>
        }
        </>
    )
}

export default Movie;