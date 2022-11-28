import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function Nv({settext , setrate}) {
  return (
   <Navbar bg="dark" expand="lg" variant ="dark">
      <Container fluid>
        <Navbar.Brand href="#">Movie app</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to="/" style={{textDecoration:"none", color:"white"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/contact" style={{textDecoration:"none", color:"white"}}>Contact</Link></Nav.Link>
            <Nav.Link ><Link to="/about" style={{textDecoration:"none", color:"white"}}>About</Link></Nav.Link>
          </Nav>
           <ReactStars count={5}  size={24} activeColor="#ffd700"  onChange={(newRating)=>setrate(newRating)}/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nv;