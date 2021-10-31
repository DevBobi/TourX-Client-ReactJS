import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, title, description, img } = service;

    const history = useHistory();

    const handleDetails = (id) => {
        const uri = `/orderDetail/${id}`;
        history.push(uri);
    }
    return (
        <div>
            <Card className=" m-3 service border-dark" >
                <Card.Img variant="top" className="img rounded" src={img} />
                <Card.Body className="p-4">
                    <Card.Title>{title.slice(0, 15)}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 65)}
                    </Card.Text>

                    <Button onClick={() => handleDetails(_id)} variant="dark">Book Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;