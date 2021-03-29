import react, { useState } from 'react'
import { useHttp } from '../../Components/httpHook'
import CancelIcon from '@material-ui/icons/Cancel';
import { Nav } from 'react-bootstrap'
import './editMovie.css'
const InfoMovieComponent = ({ movie }) => {

    const [name, setName] = useState(movie.name)
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate)
    const [picture, setPicture] = useState(movie.picture)

    const [nameGenre, setNameGenre] = useState(movie.genre[0].nameGenre)
    const [firstName, setFirstName] = useState(movie.author[0].firstName)
    const [secondName, setSecondName] = useState(movie.author[0].secondName)
    const [photo, setPhoto] = useState(movie.author[0].photo)
    const [id, setId] = useState(movie.id)

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

    const { loading, request, error, clearError } = useHttp()

    async function editMovie() {
        form._id = id
        form.Genre[0].NameGenre = nameGenre
        form.Author[0].FirstName = firstName
        form.Author[0].SecondName = secondName
        form.Author[0].Photo = photo
        form.Name = name
        form.ReleaseDate = releaseDate
        form.Picture = picture

        console.log(form)

        try {
            const data = await request('/api/Movies', 'PUT', { ...form })
        } catch (e) {

        }
    }

    return (
        <div className="field__info_">
            <div className="icon__close_">
                <Nav.Link href="/listMovie"><CancelIcon style={{ fontSize: 60 }} /> </Nav.Link>
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

            <Nav.Link href="/listMovie"><button onClick={editMovie}>Edit Movie</button></Nav.Link>
        </div>
    )
}

export default InfoMovieComponent