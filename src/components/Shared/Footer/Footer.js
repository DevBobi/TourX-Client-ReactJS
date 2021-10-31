import React from 'react';
import './Footer.css';
import logo from '../../../assets/logo1.png';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import paymentWay from '../../images/payment.jpg';

const Footer = () => {
    return (
        <div className="bg-dark">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 py-3">
                    <div className="row">
                        <NavLink as={Link}
                            to="/"
                            style={{ textDecoration: "none", color: "#ff9e32" }}
                        >
                            <img
                                src={logo}
                                width="130"
                                height="40"
                                className="d-inline-block "
                                alt="React Bootstrap logo"
                            />
                        </NavLink>
                        <small className="text-light">copyright &copy; by Tour-X</small>
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">About Us</small><br />
                        <small className="m-0">Read our blog</small><br />
                        <small className="m-0">Mail Us</small><br />
                    </div>
                    <div className="col text-light mt-3">
                        <small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View all clients</small><br />

                    </div>
                </div>

            </div>
        </div >
    );
};

export default Footer;