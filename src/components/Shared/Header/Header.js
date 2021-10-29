import React from 'react';
import { Button, Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/foooter.png'
import useAuth from '../../../hooks/useAuth';
import { FiLogOut } from "react-icons/fi";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar variant="dark" className="tour-nav bg-dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand">
                        <NavLink as={Link}
                            to="/"
                            style={{ textDecoration: "none", color: "#ff9e32" }}
                        >
                            <img
                                src={logo}
                                width="130"
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-menu">
                                <NavLink as={Link}
                                    to="/"
                                    style={{ textDecoration: "none", color: "#ff9e32" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    Home
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link className="nav-menu">
                                <NavLink as={Link}
                                    to="/courses"
                                    style={{ textDecoration: "none", color: "#ff9e32" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    My Orders
                                </NavLink>
                            </Nav.Link>
                            {
                                user.email ?
                                    <Button onClick={logOut} variant="danger" className="  rounded-pill px-3 fw-bolder">Log Out <FiLogOut /></Button>
                                    :
                                    <Link to="/login">
                                        <Button variant="info" className="mx-2 rounded-pill px-3 fw-bolder">Log In <FaSignInAlt /></Button>
                                    </Link>
                            }

                            {
                                user?.email && user?.photoURL ? <img width="40px" className="rounded-circle ms-3 user" src={user?.photoURL} alt="" /> : <span className="displayName">{user.displayName}</span>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;