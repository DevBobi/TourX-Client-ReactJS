import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/orderDetail/${id}`;
        history.push(uri);
    }
    return (
        <div>
            <Card className=" m-4 service border-dark" >
                <Card.Img variant="top" className="img rounded" src={img} />
                <Card.Body className="p-4">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <Button onClick={() => handleDetails(_id)} variant="dark">Book Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;