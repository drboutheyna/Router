import React from 'react';
import MovieAdd from './MovieAdd';
import MovieCard from './MovieCard';


function MovieList({movies ,setmovies , text, rate}) {
  return (
    <div>
       <div className ='btnadd'> <MovieAdd setmovies={setmovies} movies={movies}/></div>
    
    <div className='box'>
    {movies.filter((el)=>el.title.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=><MovieCard movie={el}/>)}

    </div>
    </div>
  );
}

export default MovieList;