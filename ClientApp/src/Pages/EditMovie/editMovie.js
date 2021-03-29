import react, {useContext} from 'react'
import {MovieContext} from '../../Components/componentMovie'
const InfoMovieComponent = () => {
    const movie = useContext(MovieContext)
    return (
        <div>
          {console.log(movie)}
        </div>
    )
}

export default InfoMovieComponent