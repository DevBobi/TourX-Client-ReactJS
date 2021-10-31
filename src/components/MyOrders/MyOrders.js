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
        <Container className="my-4 pb-5">
            <h2 className="pt-3">My Orders</h2>
            <h3>Total Orders: {orders.length}</h3>
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
                    className="bg-secondary text-light rounded mb-2 py-5 text-start ps-5"
                >
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <h6>Name: <small>{order?.booked?.title}</small></h6>
                        <h6>Description: <small>{order?.booked?.description}</small></h6>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <h6>Address: {order?.address}</h6>
                        <h6>Contact: {order?.phone}</h6>
                        <h6>Email: {order?.email}</h6>
                    </Col>
                    <Col className="py-3" xs={4} md={4} lg={4}>
                        <h6>Status: {order?.status}</h6>
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