
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';


const AddFood = () => {

    const {user} = useContext(AuthContext)

    const handleAddProduct = event =>{
        event.preventDefault();
    
        const form = event.target;
        const foodname = form.foodname.value
        const quantity = form.quantity.value
        const expiredDateTime = form.expiredDateTime.value
        const additionalNotes = form.additionalNotes.value
        const image = form.image.value
        const pickupLocation = form.pickupLocation.value
        const donername = user?.displayName;
        const email = user?.email;
        const donerimage = user?.photoURL
        
        const newFood = {image,quantity,pickupLocation,additionalNotes,donername,email,expiredDateTime,foodname,donerimage}
        console.log(newFood)
    
        fetch('https://community-food-sharing-platfrom-server.vercel.app', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add Food Sucessfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div className="hero min-h-screen text-blue-600" style={{ backgroundImage: 'url(https://i.ibb.co/KmhWWYK/feed-collage-1-768x470.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" p-24">
                <h2 className="text-5xl font-bold text-center pb-6">Add a Food</h2>
                <form onSubmit={handleAddProduct}>
                   
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="foodname" placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Food Quntity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Food Quntity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                 
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="donername" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Pickup Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="pickupLocation" placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Expired Date/Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="expiredDateTime" placeholder="Expired Date/Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white"> Additional Notes</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="additionalNotes" placeholder=" Additional Notes" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                  
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white">Food Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Food Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white">Doner Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="donerimage"  defaultValue={user?.photoURL}  placeholder="Food Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Food" className="btn btn-outline btn-secondary" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;