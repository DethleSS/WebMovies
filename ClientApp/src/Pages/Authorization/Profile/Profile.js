import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../../Components/Context/AuthContext'

import './Profile.css'

const Profile = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)


    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/authorization')
        window.location.reload()
    }
    console.log(auth.usertoken)
    return (
        <div>
            <NavLink to={'/listMovie'}><button className="button--click">To Movies</button></NavLink>
            <div className="m-5">
                You are Login       
                <button className="button--click " onClick={logoutHandler}>LogOut</button>
            </div>

        </div>
    )
}

export default Profile;