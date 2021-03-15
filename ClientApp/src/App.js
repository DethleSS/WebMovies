import React, { useState, useEffect, useCallback } from 'react'
import { useHttp } from './Hooks/http.hook';
import Movie from './Components/movie'
import Preloader from './Components/Preloader/preloader'
function App() {
  const [data, setData] = useState()

useEffect(() => {
  fetch('api/Movies/Get')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      });
},[])

  return (
    <div>

    </div>
  );
}

export default App;
