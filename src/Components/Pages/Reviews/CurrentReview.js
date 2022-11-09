import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const CurrentReview = ({ rvw, handleDeleteReview, setCurrentUserReview }) => {
    // console.log(rvw);
    const { name, review, serviceImage, serviceName, servicePrice, _id } = rvw;

    return (

        <tr>

            <td className='flex flex-col md:flex-row lg:flex-row'>
                <button onClick={() => handleDeleteReview(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <Link
                    class="inline-block rounded-full border border-black bg-black p-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
                    to={`/update/${_id}`}
                >
                    <span class="sr-only"> Edit </span>
                    <p>Edit</p>

                </Link>

            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                            <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">${servicePrice}</div>
                    </div>
                </div>
            </td>
            <td className="font-semibold">
                {name}
                <br />
            </td>
            <td>
                {review}
            </td>
        </tr>

    );
};

export default CurrentReview;