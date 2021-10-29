import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './ServiceDetail.css';
import useAuth from '../../../hooks/useAuth';

const ServiceDetail = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [singleService, setSingleService] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const matchedService = details?.find(service => service._id == serviceId)
        setSingleService(matchedService)
    }, [details]);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed');
                    reset();
                }
            })
    }



    return (
        <div className="row d-flex align-items-center container mt-5">
            <div className="col-lg-8 col-md-6 col-sm-12 add-order my-5">
                <h3>Please Add info To Place Order..</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="forms">
                    <input {...register("name")} type="text" placeholder="Username" />
                    <input {...register("email",)} type="email" placeholder={user?.email} />
                    <input type="phone-number" {...register("phone")} placeholder="Phone" />
                    <textarea {...register("description")} placeholder={singleService?.name} />
                    <input type="submit" />
                </form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className=" col-sm-12 my-4">
                    <img className="my-1 img-fluid" src={singleService?.img} alt="" />
                </div>
                <h2>{singleService?.name}</h2>
                <p>{singleService?.description}</p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary">Go Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;