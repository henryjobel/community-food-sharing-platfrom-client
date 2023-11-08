import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {loginWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const naviGates = useNavigate();
    const handlegoogleLogin = (socialMedia) =>{
        socialMedia()
        .then(result=>{
            console.log(result)
            naviGates(location?.state ? location.state: '/');
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={()=>handlegoogleLogin(loginWithGoogle)} className='btn'><FcGoogle></FcGoogle> Sing In with Google</button>
        </div>
    );
};

export default SocialLogin;