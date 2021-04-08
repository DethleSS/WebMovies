import React from 'react'
import './componentMovie.css'
import AddIcon from '@material-ui/icons/Add';
import {NavLink} from 'react-router-dom'
const AddComponentMovie = () => {

    return (
        <div className="bg__item--add" >
            <div className="bg__item--add_text">
                <p>Create new Movies</p>
            </div>

            <div className="bg__item--add_content">
                <NavLink to={'/addNewMovie'}><AddIcon className="icon__plus" style={{ fontSize: 100 }} /></NavLink>
            </div>


        </div>
    )
}

export default AddComponentMovie