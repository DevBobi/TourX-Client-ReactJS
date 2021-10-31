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
        <Container className="my-3 pb-5">
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
                    key={order._id}
                    className="bg-secondary text-light rounded mb-2 py-5 pt-3 text-start ps-5"
                >
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p><span className="text-dark">Name:</span> <small>{order?.booked?.title}</small></p>
                        <p><span className="text-dark">Description:</span> <small>{order?.booked?.description}</small></p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p><span className="text-dark">Address:</span> {order?.address}</p>
                        <p><span className="text-dark">Contact:</span> {order?.phone}</p>
                        <p><span className="text-dark">Email:</span> {order?.email}</p>
                        <p><span className="text-dark">Date:</span> {order?.date.slice(0, 25)}</p>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <p><span className="text-dark">Status:</span> {order?.status}</p>
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