import React from 'react';

const FeaturedCard = ({ feature }) => {


    const { id,foodImage, foodName, donatorImage, donatorName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes } = feature

    return (
        <div data-aos="zoom-in-right">
            <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={foodImage} alt={foodName} className="w-full h-64 object-cover" />
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold mb-2">{foodName}</h2>
                    <div className="flex items-center mb-2">
                        <img src={donatorImage} alt={donatorName} className="w-8 h-8 rounded-full mr-2" />
                        <span className="text-gray-700">{donatorName}</span>
                    </div>
                    <p className="text-gray-700">Quantity: {foodQuantity} servings</p>
                    <p className="text-gray-700">Pickup Location: {pickupLocation}</p>
                    <p className="text-gray-700">Expires: {expiredDateTime}</p>
                    <p className="text-gray-700">Additional Notes: {additionalNotes}</p>
                </div>
                <div className="px-6 py-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;