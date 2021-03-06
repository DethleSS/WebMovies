import React, { useState } from 'react'
import './componentMovie.css'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import SearchIcon from '@material-ui/icons/Search';
import EditMovie from '../Pages/EditMovie/editMovie'
import InfoMovie from '../Pages/InfoMovie/infoMovieComponent'
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMoviesById } from '../Store/Movie/action';

const Movie = ({ movie }) => {

    const dispatch = useDispatch()

    return (
                <div className="bg__item" style={{ backgroundImage: `url(${movie.picture})` }}>
                    <NavLink to={`/editMovie/${movie.id}`}><SettingsIcon className="icon__search" style={{ fontSize: 60 }}><EditMovie movie={movie} /></SettingsIcon></NavLink>
                    <NavLink to={`/infoMovie/${movie.id}`}><SearchIcon className="icon__search" style={{ fontSize: 60 }}/></NavLink>
                    <DeleteOutlinedIcon className="icon__delete" onClick={() => dispatch(deleteMoviesById(movie.id))} style={{ fontSize: 60 }} /><p />
                    <div className="field__text">
                        <h1 className="text__name-Movie">{movie.name}</h1>
                        <h2 className="text__release-Date">{movie.releaseDate}</h2>
                    </div>
                </div>
    )
}

export default Movie;