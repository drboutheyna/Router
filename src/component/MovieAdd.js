import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MovieList from './MovieList';

function MovieAdd({movies, setmovies}) {
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [newmovie, setnewmovie] = useState({
    name:"",
    description:"",
    posterURL:"",
    rating:0,
    
});
const handleAdd = () =>{
  setmovies([...movies, newmovie]);
};
  return (
     <>
      <Button  variant="dark" onClick={handleShow}>
      +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter movie name" onChange={(e)=>setnewmovie({...newmovie, name: e.target.value})} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie image</Form.Label>
        <Form.Control type="text" placeholder="Enter movie image" onChange={(e)=>setnewmovie({...newmovie, posterURL: e.target.value})}  />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter movie description"   onChange={(e)=>setnewmovie({...newmovie, description: e.target.value})}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie, rate: e.target.value})}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleAdd(); handleClose()}} >
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieAdd