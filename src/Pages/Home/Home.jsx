import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BannerTwo from '../../Components/BannerTwo/BannerTwo';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonials from '../../Components/Testimonials/Testimonials';
import NewsLatters from '../../Components/Newslatters/NewsLatters';
import Howmany from '../../Components/HOwmany/Howmany';
import HowItsWork from '../../Components/HowtisWorl/HowItsWork';
import HeroFeatureFood from '../../FeaturedFoods/FeaturefoodUsingHero/HeroFeatureFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerTwo></BannerTwo>
            <div className="max-w-3xl mx-auto text-center mt-20 pb-16 pt-20" data-aos="zoom-in-down">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">Feature Foods</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-500 to-indigo-500"></span>
                </h1>

            </div>
            <HeroFeatureFood></HeroFeatureFood>
            <OurTeam></OurTeam>
            <Testimonials></Testimonials>
            <HowItsWork></HowItsWork>
            <Howmany></Howmany>
            <NewsLatters></NewsLatters>

        </div>
    );
};

export default Home;