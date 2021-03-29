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
    })

    const [nameGenre, setNameGenre] = useState()
    const [FirstName, setFirstName] = useState()
    const [SecondName, setSecondName] = useState()
    const [Photo, setPhoto] = useState()


    


    const { loading, request, error, clearError } = useHttp()

    async function AddMovie() {
        form.Genre[0].NameGenre = nameGenre
        form.Author[0].FirstName = FirstName
        form.Author[0].SecondName = SecondName
        form.Author[0].Photo = Photo
        try {
            const data = await request('/api/Movies', 'POST', { ...form })
            console.log(1, data)
        } catch (e) {

        }
    }

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
        
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
                onChange={e => setFirstName(e.target.value)}
            />
            <input
                placeholder="Enter SecondName"
                id="SecondName"
                type="text"
                name="SecondName"
                onChange={e => setSecondName(e.target.value)}
            />
            <input
                placeholder="Enter link Photo"
                id="Photo"
                type="text"
                name="Photo"
                onChange={e => setPhoto(e.target.value)}
            />
            <h1>Genre</h1>
            <input
                placeholder="Enter NameGenre"
                id="NameGenre"
                type="text"
                name="NameGenre"
                onChange={e => setNameGenre(e.target.value)}
            /><p/>
            
        <Nav.Link href="/listMovie"><button onClick={AddMovie}>Add movie</button></Nav.Link>
        </div>
    )
}

export default AddNewMovieTemplate