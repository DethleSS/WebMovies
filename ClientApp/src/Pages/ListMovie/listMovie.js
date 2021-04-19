import React, { useEffect, useContext, useState } from 'react'
import Movies from '../../Components/movies'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../../Store/Movie/action'
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom'
import { UseAuth } from '../../Components/Hook/authHook';
import { AuthContext } from '../../Components/Context/AuthContext';



function ListMovie() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.movies.movies)
  const loading = useSelector(state => state.app.loading)
  const auth = useContext(AuthContext)
  
  useEffect(async () => {
    dispatch(fetchMovies(auth.usertoken))
  }, [auth])



  if (loading) {
    return (
      <div>
        {console.log(auth)}
        <h1>loading...</h1>
        <CircularProgress />
      </div>

    )
  }
  return (
    <div>
      <NavLink to={'/authorization'}>Auth</NavLink>
      <Movies key={data} movies={data} />
    </div>
  )
}



export default ListMovie;
