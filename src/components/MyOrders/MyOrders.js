import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://gentle-island-49422.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const bookedOrder = orders.filter(order => order.email == user.email)
    // console.log(bookedOrder)
    return (
        <div>
            <h2>This is my orders{orders.length}</h2>
            {
                bookedOrder.map(orderInfo => <div>
                    <h2>{orderInfo.address}</h2>
                    <h2>{orderInfo.phone}</h2>
                </div>)
            }
        </div>
    );
};

export default MyOrders;