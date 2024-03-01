import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
const MovieList = (props) => {
  console.log("movies:",props.movies)
  return (
  <div>
  {props.movies.map(movie=><MovieCard movie={movie}/>)}
  </div>
  )
}

export default MovieList
