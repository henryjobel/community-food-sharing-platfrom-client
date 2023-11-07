import React from 'react';

const BannerTwo = () => {
    return (
        <div>
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">


                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover" src="https://i.ibb.co/3yq5jQw/teamwork-in-homeless-shelter-royalty-free-image-1608327313.jpg" alt="imagebb" />
                </div>


                <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">

                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-blue-400 lg:text-4xl">Community Food Sharing and Surplus
                            Reduction </h2>
                        <p className="mt-4">

                            The Community Food Sharing and Surplus Reduction Platform is a digital initiative aimed at minimizing food waste and fostering a sense of community. It provides a user-friendly interface for individuals and businesses to share surplus food with those in need. Users can list available food items,
                        </p>

                        <div className="mt-8">
                            <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-400 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read More</a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BannerTwo;