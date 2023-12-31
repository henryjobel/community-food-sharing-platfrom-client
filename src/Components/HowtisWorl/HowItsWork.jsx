import React from 'react';

const HowItsWork = () => {
    return (
        <div>
            <div className="bg-blue-50">
                <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

                    <div className="text-center">
                        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                            STEPS
                        </p>
                        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                            How it <span className="text-indigo-600">Works?</span>
                        </h3>

                    </div>

                    <div className="mt-20">
                        <ul className="">
                            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
                                <div className="flex flex-col items-center " data-aos="fade-right">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            1
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Snap and Share</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Users capture surplus food items through the platforms mobile app.
                                            They share details like type, quantity, and expiration date.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
                                <div className="flex flex-col items-center" data-aos="fade-left">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            2
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Connect and Collect</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Neighbors in need browse available surplus through the platform.
                                            Once a match is found, they connect with the contributor for collection.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className=" bg-gray-100 p-5 pb-10 text-center mb-20">
                                <div className="flex flex-col items-center" data-aos="fade-right">
                                    <div className="flex-shrink-0 relative top-0 -mt-16">
                                        <div
                                            className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            3
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900">Community Impact:</h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Track and celebrate the impact - reduced food waste and strengthened community bonds.
                                            Platform encourages users to share their surplus regularly, fostering a sustainable sharing culture.
                                        </p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HowItsWork;