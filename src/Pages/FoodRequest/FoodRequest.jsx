import React, { useEffect, useState } from 'react';
import ReqFoodHero from './ReqFoodHero';


const FoodRequest = () => {

  const [reqfoods, setReqFoods] = useState([]);
  useEffect(() => {

    fetch('http://localhost:5000/foodrequest')
      .then(response => response.json())
      .then(data => setReqFoods(data));
  }, []);



  return (
    <div className='container mx-auto'>
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative text-center ">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">Requsted Foods</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-300 to-indigo-500"></span>
      </h1>
      <div className='container mx-auto grid lg:grid-cols-4 gap-2 pt-9'>
        {
          reqfoods.map(reqfoods => <ReqFoodHero key={reqfoods._id} reqfoods={reqfoods}></ReqFoodHero>)
        }
      </div>
    </div>
  );
};

export default FoodRequest;