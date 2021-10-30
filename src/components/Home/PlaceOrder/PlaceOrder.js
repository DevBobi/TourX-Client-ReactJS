import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { orderId } = useParams();
    const [details, setDetails] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const matchedService = details?.find(service => service._id == orderId)
        setSingleService(matchedService)
    }, [details]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "pending";
        data.email = user?.email;
        data.booked = singleService;
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed Successfully!');
                    reset();
                }
            })
    }
    return (
        <div className="row d-flex align-items-center container mt-5">
            <div className="col-lg-8 col-md-6 col-sm-12 add-order my-5">
                <h3>Please Add info To Place Order..</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="forms">
                    <input {...register("username")} required type="text" placeholder="Username" />
                    <input {...register("email",)} required type="email" placeholder={user?.email} disabled />
                    <input {...register("date",)} type="date" placeholder="Date" />
                    <input {...register("address",)} required type="text" placeholder="Address" />
                    <input type="phone-number" {...register("phone")} placeholder="Phone" />
                    <Button variant="secondary" type="submit">Place Order  </Button>
                    {/* <input type="submit" /> */}
                </form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className=" col-sm-12 my-4">
                    <img className="my-1 img-fluid" src={singleService?.img} alt="" />
                </div>
                <h2>{singleService?.title}</h2>
                <p>{singleService?.description}</p>
                {/* <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary">Go Home</Button>
                </Link> */}
            </div>
        </div>
    );
};

export default PlaceOrder;