import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const HeaderNavbar = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">ToDo Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Add Task
              </Nav.Link>
              <Nav.Link as={Link} to="/alltask">All TAsk</Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <button onClick={handleLogout} className="btn btn-outline-primary">Logout</button>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="btn btn-outline-primary"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
