import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Record Applications</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="mr-auto">
            <Nav.Link href="/add">Add Apps</Nav.Link>
            <Nav.Link href="/view">View Apps</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            </Nav>            
            <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar;