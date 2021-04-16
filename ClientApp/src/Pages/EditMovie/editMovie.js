import react, { useState, useEffect } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import { NavLink } from 'react-router-dom'
import './editMovie.css'
import { useHttp } from '../../Components/Hook/httpHook';

const EditMovieComponent = () => {
    const [idMovie, setIdMovie] = useState(document.location.pathname.match(/[0-9]+/g))
    const [movie, setMovie] = useState()
    const { loading, request, error, clearError } = useHttp()


    useEffect(async () => {
        const response = await fetch("/api/Movies/" + idMovie, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const data = await response.json()
        setMovie(data)
        setName(data.name)
        setReleaseDate(data.releaseDate)
        setPicture(data.picture)
        setNameGenre(data.genre[0].nameGenre)
        setFirstName(data.author[0].firstName)
        setSecondName(data.author[0].secondName)
        setPhoto(data.author[0].photo)
        setId(data.id)
    }, [])

    const [name, setName] = useState()
    const [releaseDate, setReleaseDate] = useState()
    const [picture, setPicture] = useState()

    const [nameGenre, setNameGenre] = useState()
    const [firstName, setFirstName] = useState()
    const [secondName, setSecondName] = useState()
    const [photo, setPhoto] = useState()
    const [id, setId] = useState()

    const [form, setForm] = useState({

        id: id,
        Name: name,
        Author: [
            {
                _id: 0,
                FirstName: firstName,
                SecondName: secondName,
                Photo: photo
            }
        ],
        Genre: [
            {
                _id: 0,
                NameGenre: nameGenre
            }
        ],
        ReleaseDate: releaseDate,
        Picture: picture
    })



    async function editMovie() {
        form.id = id
        form.Genre[0].NameGenre = nameGenre
        form.Author[0].FirstName = firstName
        form.Author[0].SecondName = secondName
        form.Author[0].Photo = photo
        form.Name = name
        form.ReleaseDate = releaseDate
        form.Picture = picture
        try {
            const data = await request('/api/Movies', 'PUT', { ...form })
        } catch (e) {

        }
    }

    return (
        <div>
            {movie ?
                <div>
                    <div className="field__info_">
                        <div className="icon__close_">
                            <NavLink to={"/listMovie"}><CancelIcon style={{ fontSize: 60 }} /> </NavLink>
                        </div>
                        <input
                            placeholder={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            placeholder={releaseDate}
                            onChange={e => setReleaseDate(e.target.value)}
                        />
                        <input
                            placeholder={picture}
                            onChange={e => setPicture(e.target.value)}
                        /><p />
                        <h1>Author</h1>
                        <input
                            placeholder={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <input
                            placeholder={secondName}
                            onChange={e => setSecondName(e.target.value)}
                        />
                        <input
                            placeholder={photo}
                            onChange={e => setPhoto(e.target.value)}
                        />
                        <h1>Genre</h1>
                        <input
                            placeholder={nameGenre}
                            onChange={e => setNameGenre(e.target.value)}
                        /><p />

                        <NavLink to={"/listMovie"}><button onClick={editMovie}>Edit Movie</button></NavLink>
                    </div>
                </div>

                : <h1>loading</h1>}
        </div>

    )
}

export default EditMovieComponent