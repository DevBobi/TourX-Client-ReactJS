import React from 'react';
import aboutImg from '../../../assets/bannner/destination12.jpg';
import './About.css'

const About = () => {
    return (
        <div className="about-div">
            <div className=" d-flex row align-items-center justify-content-between my-5">
                <div className="col-lg-6 col-sm-12 mb-4 about-text">
                    <div className="about-content px-5 ">
                        <h4 className="mb-1 text-info fw-normal">About Us</h4>
                        <h2 className="text-warning">We're truely dedicated to make your travel experience best</h2>
                        <p className="text-light">
                            Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
                            <br />
                            <br />
                            Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div>
                        <img src={aboutImg} className=" w-75" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;