
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nv from './component/Nv';
import MovieList from './component/MovieList';
import { useState } from 'react';

import About from './component/About';
import Contact from './component/Contact';
import { Route, Routes } from 'react-router-dom';
import Trailer from './component/Trailer';

const App = () => {
  const [movies, setmovies] = useState([
    {id:Math.random(),
      title:'Turning Red',
      description:'A 13-year-old girl named Meilin turns into a giant red panda whenever she gets too excited.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BZmQxMDJkOWYtODdmYS00MTM1LWI2ZGQtNzA0MDc1Njk5NjQyXkEyXkFqcGdeQXVyNjA5ODQxMDI@._V1_QL75_UY281_CR0,0,190,281_.jpg" srcset="https://m.media-amazon.com/images/M/MV5BZmQxMDJkOWYtODdmYS00MTM1LWI2ZGQtNzA0MDc1Njk5NjQyXkEyXkFqcGdeQXVyNjA5ODQxMDI@._V1_QL75_UY281_CR0,0,190,281_.jpg',
      rating:'5',
    },
    {id:Math.random(),
      title:'Minions',
      description:'The untold story of one twelve-year-olds dream to become the worlds greatest supervillain.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_QL75_UX190_CR0,10,190,281_.jpg" srcset="https://m.media-amazon.com/images/M/MV5BZDQyODUwM2MtNzA0YS00ZjdmLTgzMjItZWRjN2YyYWE5ZTNjXkEyXkFqcGdeQXVyMTI2MzY1MjM1._V1_QL75_UX190_CR0,10,190,281_.jpg',
      rating:'4',
    },
    {id:Math.random(),
      title:'Spirited Away',
      description:'During her family s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BZWZkMmJhM2YtYjI5Yy00Zjg2LTkyNTUtMzVlYTFhZTY4M2JmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UX190_CR0,2,190,281_.jpg',
      rating:'2',
    },
    {id:Math.random(),
      title:'Monstres & Cie',
      description:'In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX190_CR0,0,190,281_.jpg" srcset="https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      rating:'3',
    },
    {id:Math.random(),
      title:'Your Name',
      description:'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
      posterURL:'https://m.media-amazon.com/images/M/MV5BZjlmYWUwYzMtNjA4NS00MTRiLTlhMjctZDQ2YjNmZjA1M2MzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_QL75_UX190_CR0,2,190,281_.jpg',
      rating:'4',
    },
    {id:Math.random(),
      title:'Kung Fu Panda',
      description:'To everyones surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valleys arch-enemy is on his way.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BMGQ0Yjk5MTEtMzIwZS00MzJlLTljMmUtZDkxNGU3NzcxZWQxXkEyXkFqcGdeQXVyMTEyODk3NTgz._V1_QL75_UY281_CR11,0,190,281_.jpg',
      rating:'5',
    },
    { id:Math.random(),
      title:'Luca',
      description:'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.',
      posterURL:'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_QL75_UX190_CR0,0,190,281_.jpg',
      rating:'4',
    },
  ]);
    
  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  return (
    <div className="App">
     <Nv settext={settext} setrate={setrate}/>
     
       <Routes>
        <Route path="/" element={   < MovieList movies={movies} setmovies={setmovies} text={text} rate={rate}/>  } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
         <Route path="Trailer/:id" element={ <Trailer movies={movies}/> } />
      </Routes>

      
    </div>


  );
}

export default App;
