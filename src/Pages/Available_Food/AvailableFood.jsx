import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AvailableFood = () => {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState('');
    const [sortOption, setSortOption] = useState('expireDate');

    useEffect(() => {

        fetch('https://community-food-sharing-platfrom-server.vercel.app/availableFoods')
            .then(response => response.json())
            .then(data => setFoods(data));
    }, []);

    const filteredFoods = foods.filter(food => {

        return food.foodname.toLowerCase().includes(search.toLowerCase());
    });

    filteredFoods.sort((a, b) => {
        if (sortOption === 'expireDate') {
            return new Date(a.expireDate) - new Date(b.expireDate);
        }

    });

    return (
        <div>

            <div
                style={{
                    background:
                        'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.ibb.co/ZByyVB6/RS36141-MG-7012.jpg) no-repeat center',
                    backgroundSize: 'cover',
                }}
                className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
            >
                <h1 className="pb-4 text-blue-400">Search for Avaviable Foods</h1>
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                    <div className="relative z-30 text-base text-black">
                        <input
                            type="text"
                            value={search}
                            placeholder="Keyword"
                            className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md"
                        >
                            <option value="expireDate">Sort by Expire Date</option>

                        </select>
                        <div
                            className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"
                        >

                        </div>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 container mx-auto">
                {filteredFoods.map((food) => (
                    <li key={food._id} className="p-4  max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={food.image} alt='' className="w-full h-64 object-cover" />
                        <div className="px-6 py-4">
                            <h2 className="text-xl font-semibold mb-2">{food.foodname}</h2>
                            <div className="flex items-center mb-2">
                                <img src={food.donerimage} alt='' className="w-8 h-8 rounded-full mr-2" />
                                <span className="text-gray-700">{food.donername}</span>
                            </div>
                            <p className="text-gray-700">Quantity: {food.quantity} servings</p>
                            <p className="text-gray-700">Pickup Location: {food.pickupLocation}</p>
                            <p className="text-gray-700">Expires: {food.expiredDateTime}</p>
                            <p className="text-gray-700">Additional Notes: {food.additionalNotes}</p>
                        </div>
                        <div className="px-6 py-4">
                            <Link to={`/foodsdetails/${food._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                                View Details
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AvailableFood;
