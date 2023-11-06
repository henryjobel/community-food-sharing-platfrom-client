import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto font-extrabold'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;