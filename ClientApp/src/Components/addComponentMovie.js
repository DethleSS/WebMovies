import React, { useState } from 'react'
import './componentMovie.css'
const AddComponentMovie = ({movie}) => {
    const [valueName, setValueName] = useState()
    const [valueDate, setValueDate] = useState()
    const [valuePicture, setValuePicture] = useState()

    async function AddMovie(valueName, valueDate, valuePicture) {
 
        const response = await fetch("/api/Movie", {
            method: "POST",
            headers: { "Accept": "application/json"},
            body: JSON.stringify({
                name: valueName
            })
        });
        if (response.ok === true) {
            window.location.reload(); 

        }
    }

    return (
        <div className="bg__item--add" >
            <div>
                <input type="text" required placeholder="Введите Ссылку на фото фильма" onChange={e => setValuePicture(e.target.value)} value={valuePicture} />
                <input type="text" required placeholder="Введите название фильма" onChange={e => setValueName(e.target.value)} value={valueName} />
                <input type="text" required placeholder="Введите дату выхода фильма" onChange={e => setValueDate(e.target.value)} value={valueDate} />
                <h1>Name: {valueName}</h1>
                <h2>Date: {valueDate}</h2>
                <button onClick={() => AddMovie(valueName, valueDate, valuePicture)}>Добавить фильм</button>
            </div>
        </div>
    )
}

export default AddComponentMovie