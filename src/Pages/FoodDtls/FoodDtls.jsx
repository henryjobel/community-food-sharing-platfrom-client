import { useLoaderData } from 'react-router-dom';

const FoodDtls = () => {

  const detail = useLoaderData()





  return (
    <div className='container mx-auto'>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">{detail.name}</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-300 to-indigo-500"></span>
        </h1>

      </div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={detail.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={detail.donator.image} />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-blue-400">{detail.donator.name}</h2>
              <p className='font-bold'>Food Pick up Location: <span className='text-blue-500'>{detail.pickupLocation}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">Food Information</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r  from-blue-300 to-indigo-500"></span>
        </h1>
        <div className="  card w-96 bg-base-100 shadow-xl image-full">
          <figure><img src={detail.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{detail.name}</h2>
            <p className='text-xl font-bold'>Food Quantity: {detail.quantity}</p>
            <p className='text-xl font-bold'>Expired Date/Time: {detail.expiredDateTime} </p>
            <div className="card-actions justify-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg text-black">Hello!</h3>
                  <p className="py-4 text-black">Press ESC key or click on ✕ button to close</p>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDtls;
