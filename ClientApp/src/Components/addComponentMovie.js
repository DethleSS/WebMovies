import React from 'react'
import './componentMovie.css'
import AddIcon from '@material-ui/icons/Add';
import { Nav } from 'react-bootstrap'

const AddComponentMovie = () => {

    return (
        <div className="bg__item--add" >
            <div>
            <Nav.Link href="/addNewMovie"><AddIcon className="icon__plus" style={{ fontSize: 60 }} /></Nav.Link>
                
            </div>
        </div>
    )
}

export default AddComponentMovie