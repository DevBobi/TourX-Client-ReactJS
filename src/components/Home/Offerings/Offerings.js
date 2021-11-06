import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Offerings = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('https://gentle-island-49422.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="container p-lg-5 py-5">
            <h1>Perfect <mark className="text-danger fs-1">Tour Packages</mark></h1>
            <p>Travel has helped us to understand the meaning of life and it has helped us <br /> become better people. Each time we travel, we see the world with new eyes.</p>

            <Row xs={1} lg={3} md={3} className="gy-lg-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Offerings;