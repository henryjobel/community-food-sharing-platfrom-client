import React from 'react';

const TableRow = ({ mannage,handleDelete,handleUpdate }) => {
    const {_id, donarName, foodName, foodImage, location, email, photo , status } = mannage;

    

    return (
        <tr>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-28 h-28">
                            <img src={foodImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="text-sm opacity-50">{location}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {donarName}

            </td>
            <td>{email}</td>
            <th>
                {
                    status === 'confirm' ? <span className='text-blue-500'>Confirmed</span> :
                    <button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default TableRow;