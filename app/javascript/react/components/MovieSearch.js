import React, { useEffect, useState } from "react"



const MovieSearch = (props) => {
  const [movie, setMovie] = useState({})
  
  const searchName = props.movie
  debugger
    
    useEffect(() => {
      fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?title=matrix&type=get-movies-by-title`, {
	    method: "GET",
	    headers: {
		  "x-rapidapi-key": "98760d053cmsh825355bb34020f2p1133c8jsna21c07c88216",
		  "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
    }
    })
    
  
    .then(response => response.json())
    .then(body => {debugger
      setMovie(body.movie_results)
      
    })
    
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    
    
    
    }, [])
  
    
 

  return(
  <div>
  <p>hello from moviesearch</p>
  </div>
  )
}
  

export default MovieSearch
