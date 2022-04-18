
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Form,  Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import logo1 from '../../../images/logo1.png'
const Header = () => {
  const [user] = useAuthState(auth);
    const handleSignOut= () => {
        signOut(auth);
    }
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
        <Link to="/" className='fw-bold fs-5'>Home</Link>
        <Link to="/services" className='fw-bold fs-5'>Services</Link>
        <Link to="/experts" className='fw-bold fs-5'>Experts </Link>
        <Link to="/blogs" className='fw-bold fs-5'>Blogs</Link>
        
        
      </Nav>
      <Form className="d-flex">
      {user?.email?<Nav.Link onClick={handleSignOut} className='text-dark fw-bold'>Log Out</Nav.Link>:<Link to='/login' className='text-dark fw-bold'>Login</Link>}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
         </nav>
        </div>
    );
};

export default Header;