import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/ffood_log-removebg-preview.png'
import { AuthContext } from '../../Provider/AuthProvider';



const Navbar = () => {

    const {user,singOut} = useContext(AuthContext)
    const handleSignOut = () => {
        singOut();
      }

    const navLInk = <> 
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/availablefood'>AvailableFood</NavLink></li>
    <li><NavLink to='/foodrequest'>FoodRequest</NavLink></li>
    <li><NavLink to='/managefood'>ManageFood</NavLink></li>
    <li><NavLink to='/addfood'>AddFood</NavLink></li>
    <li><NavLink to='/about'>About Us</NavLink></li>
    <li><NavLink to='/contact'>Contact</NavLink></li>
    

    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLInk}
                        </ul>
                    </div>
                    <div className='w-72 pt-4'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLInk}
                    </ul>
                </div>
                <div className="navbar-end">
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-8 w-8 overflow-hidden">
                <img src={user.photoURL} alt={user.displayName} className="h-full w-full object-cover" />
              </div>
              <span>{user.displayName}</span>
              <button className='btn btn-outline btn-secondary' onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <Link to="/login" className='btn btn-outline btn-secondary'>Login</Link>
          )}
        </div>
            </div>
        </div>
    );
};

export default Navbar;