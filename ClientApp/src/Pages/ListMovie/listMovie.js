import React, { useState, useEffect } from 'react'
import Movies from '../../Components/movies'


function ListMovie() {
  const [data, setData] = useState()

  useEffect(async () => {
    const response = await fetch("/api/Movies", {
      method: "GET",
      headers: { "Accept": "application/json" }
    });
    const data = await response.json()
    setData(data)
    console.log(data)
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
