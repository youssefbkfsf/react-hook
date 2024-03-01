import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Description = (props) => {
    const params=useParams()
    console.log(params)
    let movie=props.movies.find(el=>el.title==params.name)
  return (
    <div>
      {movie.Trailer}
      <Link to={"/"}>back to homepage</Link>
    </div>
  )
}

export default Description
