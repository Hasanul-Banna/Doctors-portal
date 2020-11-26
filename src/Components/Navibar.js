import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const Navibar = () => {
    return (
        <Navbar className="fixed-top container " bg="transparent" expand="lg">
            <Navbar.Brand href="/"><img className="w-25" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link className=" mx-md-3" href="/">Home</Nav.Link>
                    <Nav.Link className=" mx-md-3" href="/">Link</Nav.Link>
                    <Nav.Link className=" mx-md-3" href="/">Home</Nav.Link>
                    <Nav.Link className=" mx-md-3" href="/">Link</Nav.Link>
                    <Nav.Link className=" mx-md-3" href="/">Home</Nav.Link>
                    <Nav.Link className=" mx-md-3" href="/">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;