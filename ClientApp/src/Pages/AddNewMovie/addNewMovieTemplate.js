import React, { useState } from 'react'
import { useHttp } from '../../Components/httpHook'
import { Nav } from 'react-bootstrap'

const AddNewMovieTemplate = ({length}) => {

    const [form, setForm] = useState({

        _id: length + 1,
        Name: '',
        Author: [
            {
                _id: 0,
                FirstName: '',
                SecondName: '',
                Photo: ''
            }
        ],
        Genre: [
            {
                _id: 0,
                NameGenre: ''
            }
        ],
        ReleaseDate: '',
        Picture: ''
    }


    )
    const { loading, request, error, clearError } = useHttp()

    async function AddMovie() {
        try {
            const data = await request('/api/Movies', 'POST', { ...form })
            console.log(1, data)
        } catch (e) {

        }
        window.location.reload()
    }

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <div>
            <input
                placeholder="Enter Name"
                id="Name"
                type="text"
                name="Name"
                onChange={changeHandler}
            />
            {console.log(length)}
            <input
                placeholder="Enter ReleaseDate"
                id="ReleaseDate"
                type="text"
                name="ReleaseDate"
                onChange={changeHandler}
            />
            <input
                placeholder="Enter link Pictures"
                id="Picture"
                type="text"
                name="Picture"
                onChange={changeHandler}
            /><p/>
            <h1>Author</h1>
            <input
                placeholder="Enter FirstName"
                id="FirstName"
                type="text"
                name="FirstName"
                onChange={changeHandler}
            />
            <input
                placeholder="Enter SecondName"
                id="SecondName"
                type="text"
                name="SecondName"
                onChange={changeHandler}
            />
            <input
                placeholder="Enter link Photo"
                id="Photo"
                type="text"
                name="Photo"
                onChange={changeHandler}
            />
            <h1>Genre</h1>
            <input
                placeholder="Enter NameGenre"
                id="NameGenre"
                type="text"
                name="NameGenre"
                onChange={changeHandler}
            /><p/>
        <Nav.Link href="/listMovie"><button onClick={AddMovie}>Add movie</button></Nav.Link>
        </div>
    )
}

export default AddNewMovieTemplate