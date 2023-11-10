
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';


const AddFood = () => {

    const {user} = useContext(AuthContext)

    const handleAddProduct = event =>{
        event.preventDefault();
    
        const form = event.target;
        const foodname = form.foodname.value
        const foodquntity = form.foodquntity.value
        const expiredDate = form.expiredDate.value
        const note = form.note.value
        const photo = form.photo.value
        const pickupLocation = form.pickupLocation.value
        const shortdes = form.shortdes.value
        const name = user?.displayName;
        const email = user?.email;
        
        const newFood = {foodname,name,foodquntity,pickupLocation,shortdes,note,expiredDate,email,photo}
        console.log(newFood)
    
        fetch('http://localhost:5000/availableFoods', {
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
                    title: 'Add Product Sucessfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div className="hero min-h-screen text-purple-300" style={{ backgroundImage: 'url(https://i.ibb.co/Q81sk6Z/brand-new-car-ai-generated-image-268835-5688.jpg)' }}>
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
                                <input type="text" name="foodquntity" placeholder="Food Quntity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                 
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Expired Date/Time" defaultValue={user?.email} className="input input-bordered w-full" />
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
                                <input type="text" name="expiredDate" placeholder="Expired Date/Time" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortdes" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white"> Additional Notes</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="note" placeholder=" Additional Notes" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                  
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white">Food Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Food Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-outline btn-secondary" />
                </form>
            </div>
        </div>
    );
};

export default AddFood;