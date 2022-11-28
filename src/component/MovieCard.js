 import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
 
 function MovieCard( {movie}) {
   return (
 <Link to={ `/Trailer/${movie.id}`} style={{TexteDecoration:"none",color:"black"}} >
        <Card style={{ width: '18rem', margin:'20px' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
        <Card.Text>
         {movie.rating}
        </Card.Text>
        <ReactStars count={5}  size={24} activeColor="#ffd700" edit= { false } value={movie.rating}/>,
      </Card.Body>
    </Card>
    </Link>  
     
   );
 }
 
 export default MovieCard