import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const MovieCard = (props) => {
  return (
    <div>
      <Link to={`/movies/${props.movie.title}`}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.PosterURL} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
        {props.movie.Description}
        </Card.Text>

<Card.Text>
        {props.movie.Rating} 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default MovieCard
