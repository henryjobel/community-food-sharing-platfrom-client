import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[900px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/km3xCJG/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
                                <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
                                    <div className="w-full md:w-1/2 lg:pr-32">
                                        <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-300 leading-tight font-medium">There’s a
                                            better way to talk with your customers.</h2>
                                        <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                                            Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
                                            and deliver help content right where your customers need it, all in one place, all for one low price.
                                        </h3>
                                        <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                                            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                                            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                        <img src="https://i.ibb.co/ckQ3mfR/e480121d46e6987a8b636363b676ba499b0f21b9-donationimagegrid.jpg" alt="Girl" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide2" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Q8rwB9T/signal-2023-06-03-19-53-01-980-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex flex-wrap">
                                <div className="w-full sm:w-8/12 mb-10">
                                    <div className="container mx-auto h-full sm:p-10">
                                        <nav className="flex px-4 justify-between items-center">
                                            <div className="text-4xl font-bold">
                                                Plant<span className="text-green-700">.</span>
                                            </div>
                                            <div>
                                                <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
                                            </div>
                                        </nav>
                                        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                                            <div className="w-full">
                                                <h1 className="text-4xl lg:text-6xl font-bold">Find your <span className="text-green-700">greeny</span> stuff for your room</h1>
                                                <div className="w-20 h-2 bg-green-700 my-4"></div>
                                                <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                                                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide3" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide4" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide1" className="btn btn-outline btn-info">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;