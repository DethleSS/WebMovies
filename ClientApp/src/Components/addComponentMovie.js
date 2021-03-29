import React from 'react'
import './componentMovie.css'
import AddIcon from '@material-ui/icons/Add';
import { Nav } from 'react-bootstrap'

const AddComponentMovie = () => {

    return (
        <div className="bg__item--add" >
            <div className="bg__item--add_text">
                <p>Create new Movies</p>
            </div>

            <div className="bg__item--add_content">
                <Nav.Link href="/addNewMovie"><AddIcon className="icon__plus" style={{ fontSize: 100 }} /></Nav.Link>
            </div>


        </div>
    )
}

export default AddComponentMovie