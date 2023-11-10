import React from 'react';

const ReqFoodHero = ({ reqfoods }) => {

    const { donarName, foodName, foodImage,date,location } = reqfoods

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={foodImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{foodName}</h2>
                    <p className='font-semibold'>Name: <span className='text-blue-400'>{donarName}</span></p>
                    <p className='font-semibold'>Expire Date <span className='text-blue-400'>{date}</span></p>
                    <p className='font-semibold'>Pickup Location <span className='text-blue-400'>{location}</span></p>
                   
                </div>
            </div>
        </div>
    );
};

export default ReqFoodHero;