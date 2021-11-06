import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
    return (
        <div className="d-flex row m-lg-5 justify-content-around">
            <div className="col-lg-8 col-sm-12 px-5 my-5 text-start">
                <h2 >Contact Us</h2>
                <div >
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="name" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel label="Email address" className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Message">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            className="mb-3"
                        />
                    </FloatingLabel>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="secondary" size="lg">
                        Submit
                    </Button>
                </div>

            </div>
            <div className="col-lg-4 col-sm-12 my-4 py-4 ps-5 text-start ">
                <h2 className="mb-3">Address</h2>
                <div className="mb-2 ">
                    <h5><ImLocation /> Tour-X Delivery (pvt) Ltd.</h5>
                    <h5><HiOutlineMail /> example@example.com</h5>
                    <h5><AiOutlinePhone /> (+123) 88 44400</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;