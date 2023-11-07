import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerTwo from '../../Components/BannerTwo/BannerTwo';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLatters from '../../Components/Newslatters/NewsLatters';
import Howmany from '../../Components/HOwmany/Howmany';
import HowItsWork from '../../Components/HowtisWorl/HowItsWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
            <HowItsWork></HowItsWork>
            <Howmany></Howmany>
            <NewsLatters></NewsLatters>
            
        </div>
    );
};

export default Home;