import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const CurrentReview = ({ rvw, handleDeleteReview, setCurrentUserReview }) => {
    // console.log(rvw);
    const { name, review, serviceImage, serviceName, servicePrice, _id } = rvw;

    return (

        <tr>

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
            <td>{review}</td>
            <th>
                <label>
                    <button onClick={() => handleDeleteReview(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <th>
                <Link to={`/update/${_id}`}>
                    <button className="btn gap-2">
                        Edit review
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </Link>
            </th>
        </tr>

    );
};

export default CurrentReview;