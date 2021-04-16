import React, { useEffect } from 'react'
import Movies from '../../Components/movies'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../../Store/Movie/action'
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom'

function ListMovie() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.movies.movies)
  const loading = useSelector(state => state.app.loading)

  useEffect(async () => {
    dispatch(fetchMovies())
  }, [])

  if (loading) {
    return (
      <div>
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
