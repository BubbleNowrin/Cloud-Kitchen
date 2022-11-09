import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import CurrentReview from './CurrentReview';
import nothing from "../../../Assets/images/gif/90988-no-results.gif";
import { Helmet } from 'react-helmet-async';

const Reviews = () => {

    const [currentUserReview, setCurrentUserReview] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {

        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setCurrentUserReview(data);
            })
    }, [user?.email, logOut])

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
        <div>
            <Helmet>
                <title>My Reviews</title>
            </Helmet>
            {
                currentUserReview.length > 0 ?
                    <>
                        <div className="overflow-x-auto lg:max-w-screen mt-10 min-h-screen">
                            <table className="table table-compact w-full">

                                <thead className=''>
                                    <tr>
                                        <th>

                                        </th>
                                        <th>Service Name</th>
                                        <th>Review By</th>
                                        <th>Review</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentUserReview.map(rvw => <CurrentReview key={rvw._id} rvw={rvw} handleDeleteReview={handleDeleteReview} setCurrentUserReview={setCurrentUserReview}></CurrentReview>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <div className='flex flex-col md:flex-row lg:flex-row items-center justify-start my-10 max-h-screen'>
                        <img src={nothing} alt="" />
                        <p className='text-3xl font-semibold text-lime-700'>No reviews were added</p>
                    </div>
            }

        </div>

    );
};

export default Reviews; <h2>My Reviews</h2>