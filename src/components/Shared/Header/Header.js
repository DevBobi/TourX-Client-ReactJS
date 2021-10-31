import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
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
                                    to="/about"
                                    style={{ textDecoration: "none", color: "#ff9e32" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link className="nav-menu">
                                <NavLink as={Link}
                                    to="/contact"
                                    style={{ textDecoration: "none", color: "#ff9e32" }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    Contact
                                </NavLink>
                            </Nav.Link>

                            <Nav.Link className="nav-menu">
                                {
                                    user?.email ?
                                        <div>
                                            <NavDropdown title={user?.displayName} id="basic-nav-dropdown">

                                                <NavDropdown.Item >
                                                    <NavLink as={Link}
                                                        to="/myOrders"
                                                        style={{ textDecoration: "none", color: "black" }}
                                                    >
                                                        My Orders
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item >
                                                    <NavLink as={Link}
                                                        to="/manageOrders"
                                                        style={{ textDecoration: "none", color: "black" }}
                                                    >
                                                        Manage All Orders
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item >
                                                    <NavLink as={Link}
                                                        to="/addService"
                                                        style={{ textDecoration: "none", color: "black" }}
                                                    >
                                                        Add Service
                                                    </NavLink>
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <Button onClick={logOut} variant="dark" className="mx-2 rounded-pill px-3 fw-bolder">Log Out <FaSignInAlt /></Button>
                                            </NavDropdown>

                                        </div>
                                        :
                                        <Link to="/login">
                                            <Button variant="info" className="rounded-pill px-3 fw-bolder">Log In</Button>
                                        </Link>
                                }
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;