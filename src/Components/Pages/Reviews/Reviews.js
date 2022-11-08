import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import CurrentReview from './CurrentReview';

const Reviews = () => {

    const [currentUserReview, setCurrentUserReview] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const url = `http://localhost:5000/reviews?email=${user?.email}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCurrentUserReview(data);
                // console.log(data);
            })
    }, [user?.email])

    const handleDeleteReview = (id) => {
        const agree = window.confirm('Are you sure you want to delete the review?');
        if (agree) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        const remaining = currentUserReview.filter(cur => cur._id !== id);
                        setCurrentUserReview(remaining);
                        alert('deleted successfully');
                    }
                })
        }

    }

    return (

        <div className="overflow-x-auto  w-full mt-10 min-h-screen">
            <table className="table w-full">

                <thead className=''>
                    <tr>
                        <th>Service Name</th>
                        <th>Review By</th>
                        <th>Review</th>
                        <th>
                            <label>
                                <p>Delete</p>
                            </label>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUserReview.map(rvw => <CurrentReview key={rvw._id} rvw={rvw} handleDeleteReview={handleDeleteReview}></CurrentReview>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default Reviews; <h2>My Reviews</h2>