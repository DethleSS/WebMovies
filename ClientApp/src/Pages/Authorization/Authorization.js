import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Authorization = () => {
    const [users, setUsers] = useState()
    useEffect(async () => {
        const response = await fetch("/api/Auth", {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        const json = await response.json()
        setUsers(json);
        console.log(json)
    }, [])

    if(users){
        return (
        
            <div>
            <NavLink to={'/listMovie'}>Back</NavLink>
            <h1>Email</h1>
            <input placeholder="Enter Email" />
            <h1>Password</h1>
            <input placeholder="Enter Password" /><p />
            <button>Login</button>

                        <h1>{users[0].id}</h1>
                        <h1>{users[0].email}</h1>
                        <h1>{users[0].password}</h1>
                        <h1>{users[0].firstName}</h1>
                        <h1>{users[0].secondName}</h1>
                        <h1>{users[0].userName}</h1>

            </div> 
   
    )
    }
    return <h1>loading...</h1>
    
}

export default Authorization;