import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FoodDtls = () => {

    const {id}= useParams()
    const idInt = parseInt(id)
    const details = useLoaderData()
    const detail = details.find(detail => detail.id === idInt)
    console.log(detail)
  const [requestInfo, setRequestInfo] = useState({
    // Initialize the form fields here
    // Food Name, Food Image, Food Id, Food Donator Email, Food Donator Name, User Email, etc.
    additionalNotes: '',
    donationMoney: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestInfo({
      ...requestInfo,
      [name]: value,
    });
  };

  const handleRequestSubmit = () => {
    // Implement the logic to submit the food request to the database
    // You can make an API call to add the request to the food request collection
    // Example:
    // fetch('/api/food-request', {
    //   method: 'POST',
    //   body: JSON.stringify(requestInfo),
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       // Request successfully added, you can show a success message or redirect the user
    //     }
    //   });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Food Details</h1>

      {/* Donor Information */}
      <div className="mb-4">
        <p className="text-xl">Donor Name: {detail.donator.name}</p>
        <p className="text-xl">Food Pickup Location: {detail.pickupLocation}</p>
      </div>

      {/* Single Food Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={detail.image}
          alt="Food Name"
          className=" h-60 rounded-md"
        />
        <div>
          <p className="text-xl font-semibold">Food Name: {detail.name}</p>
          <p className="text-xl">Food Quantity:{detail.quantity}</p>
          <p className="text-xl">Expire Date/Time: {detail.expiredDateTime}</p>
          <button
            onClick={handleRequestSubmit}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Request
          </button>
        </div>
      </div>

      {/* Request Form */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Request Form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xl">Additional Notes:</label>
            <textarea
              name="additionalNotes"
              value={requestInfo.additionalNotes}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            />
          </div>
          <div>
            <label className="text-xl">Donation Money:</label>
            <input
              type="number"
              name="donationMoney"
              value={requestInfo.donationMoney}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <button
          onClick={handleRequestSubmit}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover-bg-blue-700"
        >
          Request
        </button>
      </div>
    </div>
  );
};

export default FoodDtls;
