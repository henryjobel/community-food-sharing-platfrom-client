import React from 'react';
import FeatureFood from '../Featurefood/FeatureFood';

const HeroFeatureFood = () => {
    return (
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/ZByyVB6/RS36141-MG-7012.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <FeatureFood></FeatureFood>
            </div>
        </div>
    );
};

export default HeroFeatureFood;