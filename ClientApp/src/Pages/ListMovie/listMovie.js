import React, { useState, useEffect } from 'react'
import Movies from '../../Components/movies'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovie } from '../../Store/ListMovie/action'


function ListMovie() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.movies.movies)

  useEffect(async () => {
    dispatch(fetchMovie())
  }, [])

  return (
    <div>
      
      {data ?
        <div>
          <Movies key={data} movies={data} />
        </div>

        : <h1>loading</h1>}
    </div>
  );
}

export default ListMovie;
