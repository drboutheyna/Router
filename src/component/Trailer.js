import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom'

function Trailer({ movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.id==params.id)[0];
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <img src={movie.posterURL}/>
        <h1>  {movie.name}</h1>
        <h1> {movie.description}</h1>
         <ReactStars count={5}  size={24} activeColor="#ffd700" edit= { false } value={movie.rating}/>,
    </div>
  )
}

export default Trailer