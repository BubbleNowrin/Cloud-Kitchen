import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import updatePng from "../../../Assets/images/gif/48218-update-color-flow.gif";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateReview = () => {
    const userReview = useLoaderData();
    const [reviews, setReviews] = useState(userReview);

    const { user, logOut } = useContext(AuthContext);

    const { review, _id } = reviews;

    const navigate = useNavigate();

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const editedReview = event.target.update.value;

        const updateReview = {
            review: editedReview
        }

        //get the specific review to update
        fetch(`https://cloud-kitchen-server-sepia.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    showToast();
                    event.target.reset();
                    //show the updated review
                    fetch(`https://cloud-kitchen-server-sepia.vercel.app/update/${reviews._id}`)
                        .then(res => res.json())
                        .then(data => {
                            setReviews(data);

                        })
                        .catch(err => console.error(err))
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
                            console.log(data);
                            navigate('/reviews');
                        })
                }
            })
    }

    //toast
    const showToast = () => {
        toast.success("Successfully Updated Review", { autoclose: 5000 });
    }

    return (
        <div>
            <Helmet>
                <title>Foodaholic -Update Review</title>
            </Helmet>

            <section className="bg-lime-200 mt-10 mb-24">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        className="relative flex h-32 items-end bg-lime-400 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Night"
                            src={updatePng}
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                    </section>

                    <main
                        aria-label="Main"
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">

                            <div className=''>
                                <p className='text-2xl text-lime-500 py-6'>
                                    Review Posted:
                                </p>

                                <p className='text-xl text-lime-700 py-6'>
                                    {review}
                                </p>

                                <form onSubmit={handleUpdateReview}>
                                    <textarea type="text" name="update" className="mt-4 text-sm h-32 w-96 mx-auto " >
                                    </textarea>
                                    <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                                        <button
                                            className="inline-block rounded bg-lime-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-lime-500"
                                        >
                                            Update Review
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </main>
                </div>
            </section>

        </div>
    );
};

export default UpdateReview;