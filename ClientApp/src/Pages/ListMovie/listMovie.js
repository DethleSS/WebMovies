import React, { useState, useEffect } from 'react'
import Movies from '../../Components/movies'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../../Store/Movie/action'
import CircularProgress from '@material-ui/core/CircularProgress';

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
  return <Movies key={data} movies={data} />
}

export default ListMovie;
