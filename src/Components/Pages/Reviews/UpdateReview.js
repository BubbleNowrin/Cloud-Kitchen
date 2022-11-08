import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const UpdateReview = () => {
    const userReview = useLoaderData();
    const [reviews, setReviews] = useState(userReview);

    const { user } = useContext(AuthContext);

    const { review, _id } = reviews;

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const editedReview = event.target.update.value;

        const updateReview = {
            review: editedReview
        }

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated successfully');
                    event.target.reset();
                    fetch(`http://localhost:5000/update/${reviews._id}`)
                        .then(res => res.json())
                        .then(data => setReviews(data))
                        .catch(err => console.error(err))
                    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                }
            })
    }

    return (
        <div>

            <div>
                <section className="bg-white">
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                        <div
                            className="mt-4 bg-lime-200"
                        >
                            <div className=''>
                                <p className='text-2xl text-gray-800 p-6'>
                                    Review Posted:
                                </p>

                                <p className='text-xl text-gray-800 p-6'>
                                    {review}
                                </p>

                                <blockquote
                                    className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
                                >

                                    <form onSubmit={handleUpdateReview}>
                                        <textarea type="text" name="update" className="mt-4 text-sm h-32 w-96 mx-auto" >
                                        </textarea>
                                        <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                                            <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-lime-500 text-white">Update Review</button>
                                        </div>
                                    </form>


                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UpdateReview;