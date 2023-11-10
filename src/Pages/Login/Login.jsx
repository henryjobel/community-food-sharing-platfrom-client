// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../SocialLogin/SocialLogin';


const Login = () => {
    const {singIn} = useContext(AuthContext)
    const location = useLocation();
    const naviGates = useNavigate();
    const handlelogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        singIn(email,password)
        .then(res => {
            console.log(res.user)
            naviGates(location?.state ? location.state: '/');
        })
        .catch(error =>{
            console.log(error)
        })
        if(password.length < 6){
            toast.error('Password Worng')
            return; 
        }
        else{
            toast.success('Successfully Login')
            return
        }

    }


    return (
        <div className='text-blue-500'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6Z5xkNt/DSC-1873-768x510.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <h1 className='text-4xl text-blue-600 font-extrabold my-10 text-center'>Login your account</h1>
                    <form onSubmit={handlelogin} className="w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label text-blue-700">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h1 className='text-center my-4'>You don&rsquo;t have an account <Link className='text-blue-700 font-bold' to='/register'>Register</Link></h1>
                    <SocialLogin></SocialLogin>
                </div>
                
            </div>

        </div>
    );
};

export default Login;