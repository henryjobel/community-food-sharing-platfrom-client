import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerTwo from '../../Components/BannerTwo/BannerTwo';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;