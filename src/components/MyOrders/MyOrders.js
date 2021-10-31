import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
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
        <>
            <div className="container my-orders">
                <h2>My <span className="text-danger fw-bolder mb-3">Orders</span></h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Order Name</th>
                            <th>Address</th>
                            <th>Order Date</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {bookedOrder.map((order, index) => (
                        <tbody

                            key={order._id}>
                            <tr>
                                <td>{index}</td>
                                <td>{order?.booked?.title}</td>
                                <td>{order?.address}</td>
                                <td>{order?.date.slice(0, 25)}</td>
                                <td>{order?.email}</td>
                                <Button
                                    onClick={() => handleDelete(order._id)}
                                    variant="danger py-2">
                                    Delete
                                </Button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </>
    );
};

export default MyOrders;