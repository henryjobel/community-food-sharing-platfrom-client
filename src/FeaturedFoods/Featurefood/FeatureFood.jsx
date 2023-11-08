import React, { useEffect, useState } from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const FeatureFood = () => {

    const [fetured , setFetured] = useState([])

    useEffect(()=>{

        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setFetured(data))

    },[])

    return (
        <div>
            <div className='grid lg:grid-cols-3 container mx-auto gap-2 pt-14 pb-10'>
                {
                    fetured.map(feature => <FeaturedCard key={feature.id} feature={feature}  ></FeaturedCard>) 
                }
            </div>
        </div>
    );
};

export default FeatureFood;