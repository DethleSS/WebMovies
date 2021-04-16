import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { AuthContext } from '../../../Components/Context/AuthContext'
import { useAuth } from '../../../Components/Hook/authHook'
import './Profile.css'

const Profile = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const info = useAuth()

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/authorization')
        window.location.reload()
    }

    return (
        <div>
            <div className="m-5">
                You are Login
                <button className="button--click " onClick={logoutHandler}>LogOut</button>
            </div>

        </div>
    )
}

export default Profile;