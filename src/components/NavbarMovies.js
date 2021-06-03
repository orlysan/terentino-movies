import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarMovies.css'
import Search from './Search';

class NavbarMovies extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className="movies-navbar">
                <Navbar.Brand href="#/">MovieApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#/about">About</Nav.Link>
                    </Nav>
                    <Nav className="left-nav">
                        <Nav.Link><Search /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarMovies;