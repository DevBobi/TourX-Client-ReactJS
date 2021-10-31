import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Offerings from '../Offerings/Offerings';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Offerings></Offerings>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;