import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageFood = () => {


    const {user} = useContext(AuthContext)
    const [mannage,setMannage] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/foodrequest')
        .then(res=>res.json())
        .then(data=>setMannage(data))
    },[])

    return (
        <div>
            <h1>{mannage.length}</h1>
        </div>
    );
};

export default ManageFood;