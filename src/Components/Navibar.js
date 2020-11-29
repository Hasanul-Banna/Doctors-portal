import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/logo.png';

const Navibar = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    return (
        <Navbar className="fixed-top container " bg="transparent" expand="lg">
            <Navbar.Brand to="/"><img className="w-25" src={logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Link className="navilink mx-md-3" to="/">Home</Link>
                    <Link className="navilink mx-md-3" to="/Appoinments by date">Appoinments</Link>
                    <Link className="navilink mx-md-3" to="/Appoinments by date">Dashboard</Link>
                    {!loggedInUser.email && <Link className="navilink mx-md-3" to="/login">Log In</Link>}
                    {!loggedInUser.email && <Link className="navilink mx-md-3" to="/signup">Sign Up</Link>}
                    {loggedInUser.email && <button onClick={() => setloggedInUser('')} className="btn btn-main">Log Out</button>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;