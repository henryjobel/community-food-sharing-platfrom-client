import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerTwo from '../../Components/BannerTwo/BannerTwo';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLatters from '../../Components/Newslatters/NewsLatters';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
            <NewsLatters></NewsLatters>
        </div>
    );
};

export default Home;