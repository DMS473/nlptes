import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => (
  // <header>
  //   <nav>
  //     <ul>
  //       <li><Link to="/">Home</Link></li>
  //       <li><Link to="/login">Login</Link></li>
  //       <li><Link to="/register">Register</Link></li>
  //       {/* <li><Link to="/rooms">Rooms</Link></li>
  //       <li><Link to="/reservations">Reservations</Link></li>
  //       <li><Link to="/room-time-slots">Room Time Slots</Link></li> */}
  //     </ul>
  //   </nav>
  // </header>
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/form">Form</Nav.Link>
            {/* <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
);

export default Header;
