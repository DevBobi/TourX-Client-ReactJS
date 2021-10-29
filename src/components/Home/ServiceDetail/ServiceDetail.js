import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [singleService, setSingleService] = useState({})


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);


    useEffect(() => {
        const matchedService = details?.find(service => service.id == serviceId)
        setSingleService(matchedService)
    }, [details]);



    return (
        <div className="row d-flex align-items-center">
            <div className="col-lg-8 col-md-6 col-sm-12">
                <div className=" col-sm-12 my-4">
                    <img className="my-1" width="50%" src={singleService?.image} alt="" />
                </div>
                <h2>{singleService?.title}</h2>
                <p>{singleService?.desc}</p>
                <h2>{singleService?.price}</h2>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">Go Home</Button>
                </Link>
            </div>
            <div>

            </div>

        </div>
    );
};

export default ServiceDetail;