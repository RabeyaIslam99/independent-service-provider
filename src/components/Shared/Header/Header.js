
import React from 'react';
import { Container, Form,  Nav, Navbar } from 'react-bootstrap';

import logo1 from '../../../images/logo1.png'
const Header = () => {
    return (
        <div>
         <nav>
         <Navbar bg="info" expand="lg"   fixed="top">
  <Container fluid>

    <Navbar.Brand href="#"><img
        src={logo1}
        width="95"
        height="50"
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
        <Nav.Link href="#action1" className='fw-bold fs-5'>Home</Nav.Link>
        <Nav.Link href="#action2" className='fw-bold fs-5'>Services</Nav.Link>
        <Nav.Link href="#action2" className='fw-bold fs-5'>Experts</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
      <Nav.Link href="#action1" className='text-dark fw-bold'>Login</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </nav>
        </div>
    );
};

export default Header;