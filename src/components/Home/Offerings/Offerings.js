import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Offerings = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="m-5 p-4">
            <h1>Perfect <strong className="text-danger fs-1">Tour Packages</strong></h1>
            <p>Travel has helped us to understand the meaning of life and it has helped us <br /> become better people. Each time we travel, we see the world with new eyes.</p>

            <Row xs={1} md={3} className="gy-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Offerings;