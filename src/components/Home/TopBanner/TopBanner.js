import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../assets/bannner/banner2.jpg';

const TopBanner = () => {
    return (
        <div >
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-light text-start mb-5">
                        <h2>Enjoy The Travel With <br /> <h1>Tour-X</h1></h2>
                        <p>A journey with 1000 miles starts with a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="Second slide"
                    />
                    <Carousel.Caption className=" text-top">
                        <h2>Get Ready To Travel<br /> <h1 className="text-warning">The World</h1></h2>
                        <p>A journey with 1000 miles starts with a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;