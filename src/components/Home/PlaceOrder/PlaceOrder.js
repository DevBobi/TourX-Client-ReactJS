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
        fetch('https://gentle-island-49422.herokuapp.com/services')
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
        data.booked = singleService;
        axios.post('https://gentle-island-49422.herokuapp.com/orders', data)
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
                    <input
                        {...register("username")}
                        type="text"
                        value={user.displayName} />
                    <input
                        {...register("email",)}
                        type="email"
                        value={user?.email} />
                    <input
                        {...register("date", { required: true })}
                        placeholder="date"
                        defaultValue={new Date()}
                        className="p-2 m-2"
                    />
                    <input
                        {...register("address",)}
                        required type="text"
                        placeholder="Address"
                        className="p-2 m-2"
                    />
                    <input
                        type="phone-number"
                        {...register("phone")}
                        placeholder="Phone"
                        className="p-2 m-2" />
                    <Button variant="secondary" type="submit">Place Order  </Button>
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