import React, { useEffect, useState } from 'react';
import CustomerReviews from './CustomerReviews';

const ServiceDetails = ({ food, setReviews, reviews }) => {

    const { image, foodName, details, price, _id } = food;

    return (
        <div>
            <div>
                <div className="space-y-2 text-center my-8">
                    <h2 className="text-5xl font-bold text-gray-700">Details of <span className="text-5xl font-bold text-lime-500">{foodName}</span></h2>
                    <p className="font-serif text-md text-lime-700">This Cuisine is the most sold item of my kitchen. Check it Out!</p>
                </div>
                <section className="p-4 lg:p-8 bg-lime-200 text-gray-700">
                    <div className="container mx-auto space-y-12">

                        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                            <img src={image} alt="" className="h-80 my-auto dark:bg-gray-500 aspect-video" />
                            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                <span className="text-xs uppercase dark:text-gray-400">{foodName}</span>
                                <h3 className="text-3xl font-bold">Price: ${price}</h3>
                                <p className="my-6 dark:text-gray-400">{details}</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            {
                <div className="mx-auto max-w-xl text-center mt-20">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-lime-500">
                        Trusted Reviews from Our Customers
                    </h2>

                    <p className="text-lime-700 mx-auto mt-4 max-w-lg">
                        Our customers are our secret ingredients to good food.
                    </p>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    useEffect(() => {
                        fetch(`https://cloud-kitchen-server-sepia.vercel.app/reviews/${_id}`)
                            .then(res => res.json())
                            .then(data => {
                                setReviews(data);
                            })
                    }, [_id, setReviews])

                }

                {
                    reviews.map(rev => <CustomerReviews key={rev._id} rev={rev} ></CustomerReviews>)
                }

            </div>
        </div>
    );

};

export default ServiceDetails;