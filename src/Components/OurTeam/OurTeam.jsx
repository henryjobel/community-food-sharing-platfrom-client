import React from 'react';

const OurTeam = () => {
    return (
        <div className='pt-32' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <div className="max-w-3xl mx-auto text-center mt-16">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">OUR TEAM</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-300 to-indigo-500"></span>
            </h1>
            
        </div>
            <div className="py-14 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">

                    <div className="sm:w-6/12 order-last sm:order-first">
                        <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">

                            <li className="bg-gray-100 p-5 py-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.ibb.co/3Fgm873/images.jpg" alt="Jane Doe" /></a>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                            <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Jonathon Kim</a>
                                        </h4>
                                        <p className="text-sm leading-6 text-gray-500 uppercase">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-gray-100 p-5 py-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.ibb.co/gZ9vxpp/360-F-99771374-7-Ss-OAb-Jf-E4chxv-J3sp-Og5-MEOIXdij1-Mg.jpg" alt="Jane Doe" /></a>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                            <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">James Doe</a>
                                        </h4>
                                        <p className="text-sm leading-6 text-gray-500 uppercase">
                                            Program Mannager
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-gray-100 p-5 py-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.ibb.co/K2Yrqyx/images-1.jpg" alt="Jane Doe" /></a>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                            <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Stefen</a>
                                        </h4>
                                        <p className="text-sm leading-6 text-gray-500 uppercase">
                                            Programer fo Health and human researcher
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-gray-100 p-5 py-10 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="flex-shrink-0">
                                        <a href="#"><img className="mb-3 rounded-full mx-auto h-24 w-24" src="https://i.pravatar.cc/150?img=32" alt="Jane Doe" /></a>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-lg leading-6 font-semibold text-gray-900 transition duration-500 ease-in-out">
                                            <a href="#" className="hover:text-indigo-600 transition duration-500 ease-in-out">Jane Doe</a>
                                        </h4>
                                        <p className="text-sm leading-6 text-gray-500 uppercase">
                                            Child And Human Developer
                                        </p>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last">
                        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                            THE TEAM
                        </p>
                        <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                            Meet Our <span className="text-indigo-600">Team</span>
                        </h3>
                        <p className="mt-4 text-md leading-7 text-blue-950 font-medium">
                        We are a passionate group committed to making a difference through our Community Food Sharing and Surplus Reduction Platform. Our diverse team brings together expertise in technology, community development, and a shared commitment to tackling food waste while fostering connections.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OurTeam;