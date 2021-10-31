import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row, Table } from 'react-bootstrap';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('https://gentle-island-49422.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://gentle-island-49422.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrders = orders.filter(order => order._id !== id)
                        setOrders(remainingOrders);
                    }
                })
        }
    };

    const updateStatus = (id) => {

        axios.put(`https://gentle-island-49422.herokuapp.com/updateOrder`, { id })
            .then(res => console.log("Order Approved"))
            .then((data) => setStatus(true))
    };

    return (
        <Container className="my-3">
            <h2 className="py-3">Manage All Orders</h2>
            <Row className="bg-warning rounded my-3 py-3 text-start ps-5">
                <Col xs={4} md={4} lg={4}>
                    <h5>Order Info</h5>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <h5>Address</h5>
                </Col>
                <Col xs={4} md={4} lg={4}>
                    <h5>Order Status</h5>
                </Col>

            </Row>
            {
                orders.map(order => <Row
                    className="bg-secondary text-light rounded mb-2 py-5 pt-3 text-start ps-5"
                >
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p>Name: <small>{order?.booked?.title}</small></p>
                        <p>Description: <small>{order?.booked?.description}</small></p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p>Address: {order?.address}</p>
                        <p>Contact: {order?.phone}</p>
                        <p>Email: {order?.email}</p>
                        <p>Date: {order?.date}</p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p>Status: {order?.status}</p>
                        <Button
                            onClick={() => handleDelete(order._id)}
                            variant="danger">
                            Remove Order
                        </Button>
                        {
                            (order.status === "Approved") ? <Button
                                variant="info">
                                {order?.status}
                            </Button> :
                                <Button
                                    onClick={() => updateStatus(order._id)}
                                    variant="info">
                                    {order?.status}
                                </Button>
                        }
                    </Col>
                </Row>)
            }
        </Container>


    );
};

export default ManageOrders;