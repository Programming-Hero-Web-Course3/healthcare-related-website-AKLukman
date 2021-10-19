import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/logo.png';



const NavBar = () => {
    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><img src={img} alt="" width="50px" /> MediPlus</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="nav" onTouchCancel="/home">Home</Nav.Link>
                        <Nav.Link to="/services">Services</Nav.Link>
                        <Nav.Link to="/contactus">Contact Us</Nav.Link>
                        <Nav.Link to="/login">Login</Nav.Link>
                        <Nav.Link to="/logout">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>

    );
};

export default NavBar;