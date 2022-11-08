import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {

    const reviews = useLoaderData();
    const { review } = reviews;
    console.log(reviews);

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

                                    <textarea className="mt-4 text-sm h-32 w-96 mx-auto" >

                                    </textarea>

                                    <div className="mt-8 flex justify-center gap-0.5 text-green-500">
                                        <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-lime-500 text-white">Update Review</button>
                                    </div>
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