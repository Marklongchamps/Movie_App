
import React, { useEffect, useState } from "react"


const MovieSearchForm = (props) => {
  const [movieSearch, setMovieSearch] = useState({
    name_of_movie: ""
  })

  const inputChangeHandler = (event) => {
    setMovieSearch({...movieSearch, [event.currentTarget.name]: event.currentTarget.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
      props.getMovieName(movieSearch) 
      setMovieSearch({
        name_of_movie: ""
        
      })
      
    }

 

  return(

   
    
    <form className="callout"onSubmit={handleSubmit}>
    <label>
      Enter the Name of Your Movie
        <input
          name="name_of_movie"
          id="name_of_movie"
          type="text"
          onChange={inputChangeHandler} 
          value={movieSearch.name_of_movie}       
         />
         <input 
          type="submit"
          value="Click here to Search"
          />
          </label>
          </form>
         
  )
      
}









export default MovieSearchForm








































// import React, { useEffect, useState } from "react"
// import SearchMovieContainer from "./SearchMovieContainer"

// const MovieSearchForm = (props) => {
//   const [movieSearch, setMovieSearch] = useState({
//     name_of_movie: ""
//   })

//   const inputChangeHandler = (event) => {
//     setMovieSearch({...movieSearch, [event.currentTarget.name]: event.currentTarget.value})
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//       // if (vaildForSubmission()) {
//       // props.SearchMovieContainerFunction(movieSearch)
//       setMovieSearch({
//         name_of_movie: ""
        
//       })
//       return(
//       <SearchMovieContainer
//       name={movieSearch}
//       />
//       )
//     }

 

//   return(

   
    
//     <form className="callout"onSubmit={handleSubmit}>
//     <label>
//       Enter the Name of Your Movie
//         <input
//           name="name_of_movie"
//           id="name_of_movie"
//           type="text"
//           onChange={inputChangeHandler} 
//           value={movieSearch.name_of_movie}       
//          />
//          <input 
//           type="submit"
//           value="Click here to Search"
//           />
//           </label>
//           </form>
         
//   )
      
// }









// export default MovieSearchForm


















