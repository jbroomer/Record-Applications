import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  const logout = () => {
    window.localStorage.clear();
  };

  const loggedInNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">Record Applications</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/calendar">Calendar</Nav.Link>
          <Nav.Link href="/statistics">Statistics</Nav.Link>
        </Nav>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/account">Account</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/" onClick={() => logout()}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );

  const loggedOutNavbar = () => (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand href="/">Record Applications</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto" />
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/account">Account</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );

  const loggedIn = () => (window.localStorage.getItem('loggedCompanyappUser') !== null);

  return (
    <div>{loggedIn() === true ? loggedInNavbar() : loggedOutNavbar()}</div>
  );
};

export default MyNavbar;
