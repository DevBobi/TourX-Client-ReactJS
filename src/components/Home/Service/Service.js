import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, title, desc, image } = service;

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/serviceDetails/${id}`;
        history.push(uri);
    }
    return (
        <div>
            <Card className=" m-4 service border-dark" >
                <Card.Img variant="top" className="img rounded" src={image} />
                <Card.Body className="p-4">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>

                    <Button onClick={() => handleDetails(id)} variant="dark">Book Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;