import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import TableRow from './TableRow';
import swal from 'sweetalert';

const ManageFood = () => {


    const { user } = useContext(AuthContext)
    const [mannage, setMannage] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foodrequest')
            .then(res => res.json())
            .then(data => setMannage(data))
    }, [])
    const handleDelete = id => {
        const proceed = swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        if(proceed){
            fetch(`http://localhost:5000/foodrequest/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    swal("Good job!", "You clicked the button!", "success");
                    const remaining = mannage.filter(mannage => mannage._id !== id)
                    setMannage(remaining)
                }
            })
        }
    }

    const handleUpdate = id =>{
        fetch(`http://localhost:5000/foodrequest/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update satate
                const remaining = mannage.filter(mannage => mannage._id !== id)
                    setMannage(remaining)
                const updated = mannage.find(mannage => mannage._id === id);
                updated.status = 'confirm'
                const newMang = [updated, ...remaining]
                setMannage(newMang)
            }
        })
    }


    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Donner Image</th>
                            <th>Donner Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           mannage.map(mannage => <TableRow key={mannage._id} mannage={mannage} handleDelete ={handleDelete} handleUpdate={handleUpdate}></TableRow>) 
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageFood;