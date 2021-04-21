import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../Components/Context/AuthContext'
import { useHttp } from '../../Components/Hook/httpHook'


const Authorization = () => {
    const { loading, request, error, clearError } = useHttp()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        email: '', password: ''
    })
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const loginHandler = async () => {
        try {
            const data = await request('/api/Auth', 'POST', { ...form })
            auth.login(data.usertoken, data.userID)
            console.log(data)
            window.location.reload()
        } catch (e) { }
    }


        return (
            <div>
                <NavLink to={'/listMovie'}>Back</NavLink>
                <div className="input-field">
                    <input
                        placeholder="Введите email"
                        id="email"
                        type="text"
                        name="email"
                        className="yellow-input"
                        value={form.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-field">
                    <input
                        placeholder="Введите пароль"
                        id="password"
                        type="password"
                        name="password"
                        className="yellow-input"
                        value={form.password}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Пароль</label>
                </div>
                <button disabled={loading} onClick={loginHandler}>Login</button>



            </div>

        )

}

export default Authorization;