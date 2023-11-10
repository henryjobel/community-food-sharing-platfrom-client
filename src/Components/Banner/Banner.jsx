import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[900px]">
                <motion.div
                    id="slide1"
                    className="carousel-item relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 4 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/km3xCJG/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-screen overflow-hidden">
                                <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
                                    <div className="w-full md:w-1/2 lg:pr-32">
                                        <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-300 leading-tight font-medium">Feast & Share: Unleashing Culinary Connections in Our Global Kitchen!</h2>
                                        <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-white font-light tracking-wider leading-relaxed">
                                            Explore, savor, and connect through global flavors on Feast & Share!
                                            Come to share Somting
                                        </h3>
                                        <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                                            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                                            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500"><Link to="/availablefood">Available Foods</Link></button>
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
                </motion.div>
                <motion.div
                    id="slide2"
                    className="carousel-item relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
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
                                                <h1 className="text-4xl lg:text-6xl font-bold">Savor the World: Delicious Discoveries <span className="text-green-700">Join Our</span> Culinary Community and Share </h1>
                                                <div className="w-20 h-2 bg-green-700 my-4"></div>
                                                <p className="text-xl mb-10">Embark on a culinary journey with our vibrant community. Share recipes, stories, and passion for food, forging connections that last a lifetime.</p>
                                                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
                                            </div>
                                        </header>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide3" className="btn btn-outline btn-info">❯</a>
                    </div>
                </motion.div>
                <motion.div
                    id="slide3"
                    className="carousel-item relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="h-screen w-screen" style={{ backgroundImage: 'url(https://i.ibb.co/km3xCJG/joel-muniz-A4-Ax1-Apccf-A-unsplash.jpg)' }} >
                        <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
                            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
                                <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <span
                                                    className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                                                    Help
                                                </span>
                                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                                    <span className="sm:text-6xl">
                                                    </span> Where Community
                                                    <span
                                                        className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">Eradicating Hunger
                                                    </span>
                                                    <br />
                                                    Join the Movement for Food Equity.
                                                </h1>
                                            </div>

                                            <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                                From Plate to Purpose: Nourishing Souls, Reducing Food Surplus Together
                                            </p>

                                        </div>

                                        <div className="border-t border-gray-700"></div>

                                        <div className="flex space-x-4 items-center text-white">
                                            <div className="flex items-center space-x-2">
                                                <div className="flex flex-shrink-0 -space-x-1">
                                                    <img loading="lazy" width="400" height="400" decoding="async"
                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                        style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/29.jpg" />
                                                    <img loading="lazy" width="400" height="400" decoding="async"
                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                        style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/90.jpg" />
                                                    <img loading="lazy" width="100" height="100" decoding="async"
                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                        style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/75.jpg" />
                                                    <img loading="lazy" width="200" height="200" decoding="async"
                                                        className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                                        style={{ color: "transparent" }} src="https://randomuser.me/api/portraits/men/5.jpg" />
                                                </div>

                                                <span className="flex-shrink-0 text-xs font-medium leading-5">+15</span>

                                            </div>

                                            <div className="h-4 border-l border-gray-700"></div>

                                            <div className="flex items-center">

                                                <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                                    </path>
                                                </svg>
                                                <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                                    </path>
                                                </svg>
                                                <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                                    </path>
                                                </svg>
                                                <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                                    </path>
                                                </svg>
                                                <svg className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                                                    <path
                                                        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z">
                                                    </path>
                                                </svg>

                                            </div>
                                            <div className="h-4 border-l border-gray-700"></div>
                                            <a href="" target="_blank">
                                                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light" className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16" width="250" height="54" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center w-full col-span-6">
                                    <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
                                        <div style={{ width: "100%", height: "100%" }}>
                                            <div style={{ width: "100%", height: "100%" }}>
                                                <iframe frameBorder="0" allowFullScreen="1"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    width="100%" height="100%"
                                                    src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                                                    id="widget2">
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide4" className="btn btn-outline btn-info">❯</a>
                    </div>
                </motion.div>
                <motion.div
                    id="slide4"
                    className="carousel-item relative w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6Z5xkNt/DSC-1873-768x510.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <img src="https://i.ibb.co/52yzGg9/Yellow-and-Black-Photo-Food-Facebook-Cover.png" alt="" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-outline btn-info">❮</a>
                        <a href="#slide1" className="btn btn-outline btn-info">❯</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
