
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import PostReview from './PostReview';
import ServiceDetails from './ServiceDetails';

const Details = () => {

    const [reviews, setReviews] = useState([]);
    const foodDetails = useLoaderData();

    return (
        <div className='my-8'>
            <Helmet>
                <title>Foodaholic -Details</title>
            </Helmet>

            {
                foodDetails.map(food => <ServiceDetails key={food._id} food={food} setReviews={setReviews} reviews={reviews}></ServiceDetails>)
            }
            <h1
                className="my-6 text-2xl font-bold text-lime-500 sm:text-3xl md:text-4xl"
            >
                Post Review here!
            </h1>
            {
                foodDetails.map(food => <PostReview key={food._id} food={food} setReviews={setReviews}></PostReview>)
            }

        </div>

    );
};

export default Details;