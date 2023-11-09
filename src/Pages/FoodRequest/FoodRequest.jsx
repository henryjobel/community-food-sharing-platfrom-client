import React, { useState, useEffect } from 'react';

const FoodRequest = () => {
  // State to manage the list of food requests made by the logged-in user
  const [foodRequests, setFoodRequests] = useState([]);

  useEffect(() => {
    // Fetch food requests made by the logged-in user from your data source
    // Update the 'foodRequests' state with the fetched data
    // You can use Axios, fetch, or any other data-fetching method
    // Example:
    // fetch('/api/food-requests')
    //   .then(response => response.json())
    //   .then(data => setFoodRequests(data));
  }, []);

  const handleCancelRequest = (requestId) => {
    // Implement the logic to cancel a request
    // This would typically involve making an API call to remove the request
    // Example:
     fetch(`avialbeFakeData.json/${requestId}`, { method: 'DELETE' })
      .then(response => {
        if (response.status === 200) {
        // Request successfully canceled, update the 'foodRequests' state
          setFoodRequests(foodRequests.filter(request => request.id !== requestId));
        }
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">My Food Requests</h1>

      {/* List of Food Requests */}
      <ul>
        {foodRequests.map((request) => (
          <li key={request.id} className="bg-white rounded-md p-4 shadow-md mb-4">
            <p className="text-lg">Donor Name: {request.donor.name}</p>
            <p className="text-lg">Pickup Location: {request.pickupLocation}</p>
            <p className="text-lg">Expire Date: {request.expireDate}</p>
            <p className="text-lg">Request Date: {request.requestDate}</p>
            <p className="text-lg">Your Donation Amount: {request.donationAmount}</p>
            <p className="text-lg">Status: {request.status}</p>
            <button
              onClick={() => handleCancelRequest(request.id)}
              className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Cancel Request
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodRequest;
