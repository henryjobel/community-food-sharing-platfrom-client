import React, { useState, useEffect } from 'react';

const AvailableFood = () => {
  // State to manage the list of available foods
  const [foods, setFoods] = useState([]);
  // State to manage the search input
  const [search, setSearch] = useState('');
  // State to manage the sorting option
  const [sortOption, setSortOption] = useState('expireDate');

  useEffect(() => {
    
    fetch('avialbeFakeData.json')
      .then(response => response.json())
       .then(data => setFoods(data));
  }, []);

  const filteredFoods = foods.filter(food => {
    // Implement the search functionality by filtering foods based on the 'search' input
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  // Implement the sorting functionality
  filteredFoods.sort((a, b) => {
    if (sortOption === 'expireDate') {
      return new Date(a.expireDate) - new Date(b.expireDate);
    }
    // Add more sorting options if needed
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Available Food</h1>

      {/* Search and Sort Controls */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search by Food Name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 p-2 rounded-md flex-1"
        />
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="expireDate">Sort by Expire Date</option>
          {/* Add more sorting options if needed */}
        </select>
      </div>

      {/* List of Available Foods */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFoods.map(food => (
          <li
            key={food.id}
            className="bg-white rounded-md p-4 shadow-md"
          >
            <img
              src={food.foodImage}
              alt={food.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2">{food.name}</h3>
            <p className="text-gray-600">Donator: {food.donatorName}</p>
            <p className="text-gray-600">Quantity: {food.quantity}</p>
            <p className="text-gray-600">Pickup Location: {food.pickupLocation}</p>
            <p className="text-gray-600">Expire Date/Time: {food.expireDate}</p>
            <p className="text-gray-600">Additional Notes: {food.additionalNotes}</p>
            <button
              
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableFood;
