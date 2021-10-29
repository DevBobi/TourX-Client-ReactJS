import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Offerings = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="m-5 p-4">
            <h2>Trending, Best Selling Tours And</h2>
            <h3>Fun Destinations</h3>

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