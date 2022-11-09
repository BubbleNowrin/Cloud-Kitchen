import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import CurrentReview from './CurrentReview';
import nothing from "../../../Assets/images/gif/90988-no-results.gif";
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {

    const [currentUserReview, setCurrentUserReview] = useState([]);
    const { user, logOut } = useContext(AuthContext);

    //get the specific reviews by sending query
    useEffect(() => {

        fetch(`https://cloud-kitchen-server-sepia.vercel.app/reviews?email=${user?.email}`, {
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


    //delete review functionality
    const handleDeleteReview = (id) => {
        const agree = window.confirm('Are you sure you want to delete the review?');
        if (agree) {

            //get the specific review to delete
            fetch(`https://cloud-kitchen-server-sepia.vercel.app/reviews/${id}`, {
                method: 'DELETE',
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
                    console.log(data);
                    if (data.deletedCount > 0) {

                        const remaining = currentUserReview.filter(cur => cur._id !== id);
                        setCurrentUserReview(remaining);
                        showToast();
                    }
                })
        }

    }

    //toast
    const showToast = () => {
        toast.success("Deleted Successfully", { autoclose: 5000 });
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