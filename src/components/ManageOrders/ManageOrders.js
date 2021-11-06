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
    }, [status]);

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
            .then(res => alert("Order Approved"))
            .then((data) => setStatus(true))
    };

    return (
        <Container className="my-5 ">
            <h2 className="py-3 display-3">All Orders</h2>
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
                    key={order._id}
                    className="bg-secondary text-light rounded mb-2 py-5 pt-3 text-start ps-lg-5 "
                >
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p>Name: {order?.booked?.title}</p>
                        <p>Price: ${order?.booked?.price}</p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p>Address: {order?.address}</p>
                        <p>Contact: {order?.phone}</p>
                        <p>Email: {order?.email}</p>
                        <p>Date: {order?.date.slice(0, 25)}</p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p><span >Status:</span> {order?.status}</p>
                        <Button
                            onClick={() => handleDelete(order._id)}
                            variant="danger">
                            Delete
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