import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../assets/bannner/banner2.jpg';
import banner2 from '../../../assets/bannner/banner3.png';
import './TopBanner.css';

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
                    <Carousel.Caption className="text-light text-start mb-5 car-style">
                        <h2>Enjoy The Travel With <br /> <span className="text-light display-1 fw-bolder">Tour-X</span></h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className=" text-top car-style2">
                        <h2>Get Ready To Travel<br /> <p className="text-warning fs-1">The World</p></h2>
                        <p className="text-end">A journey with 1000 miles starts with a single step.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;