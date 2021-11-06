import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://gentle-island-49422.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const bookedOrder = orders.filter(order => order.email == user.email);

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

    return (
        <Container className="my-5  ">
            <h2 className="pb-2 display-3">My Orders</h2>
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
                bookedOrder.map(order => <Row
                    key={order._id}
                    className="bg-secondary text-light rounded mb-2 py-5 text-start ps-lg-5 "
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
                        <p>Status: {order?.status}</p>
                        <Button
                            onClick={() => handleDelete(order._id)}
                            variant="danger">
                            Remove Order
                        </Button>
                    </Col>
                </Row>)
            }
        </Container>
    );
};

export default MyOrders;