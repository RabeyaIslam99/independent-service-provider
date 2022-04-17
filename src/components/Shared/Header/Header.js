
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <div>
         <nav>
         <Navbar bg="info" expand="lg"   fixed="top">
  <Container fluid>

    <Navbar.Brand href="#"><img
        src={logo}
        width="60"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
      <Nav.Link href="#action1" className='text-dark'>Login</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </nav>
        </div>
    );
};

export default Header;