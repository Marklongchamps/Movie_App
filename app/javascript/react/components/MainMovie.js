import React, { useEffect, useState } from "react"
import MovieSearchForm from "./MovieSearchForm"
import MovieSearch from "./MovieSearch"


const MainMovie = () => {
  const [movie, setMovie] = useState({})
  debugger

  const getMovieName = (moviename) => {
    setMovie(moviename)
  }
    
  


return(
<div>
< MovieSearchForm 
  getMovieName={getMovieName}
  />

  <MovieSearch
  movie={movie.name_of_movie}
  />
  </div>
)
}

export default MainMovie