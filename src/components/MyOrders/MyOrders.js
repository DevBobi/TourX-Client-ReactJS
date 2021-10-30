import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
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
            console.log(id);
        }
    };
    return (
        <div className="container my-5">
            <h1>Orders <span className="text-danger fw-bolder">Summary</span></h1>
            <h2>Total orders: {orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Order Name</th>
                        <th>Address</th>
                        <th>Order Date</th>
                        <th>User</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders.map((order, index) => (
                    <tbody
                        key={order._id}>
                        <tr>
                            <td>{index}</td>
                            <td>{order?.booked?.title}</td>
                            <td>{order?.address}</td>
                            <td>{order?.date}</td>
                            <td>{order?.username}</td>
                            <button
                                onClick={() => handleDelete(order._id)}
                                className="btn bg-danger p-2">
                                Delete
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>


    );
};

export default MyOrders;