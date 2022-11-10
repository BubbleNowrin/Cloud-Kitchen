import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { image, foodName, details, price, _id } = food;
    return (

        <div data-aos="zoom-in-down"
            data-aos-duration="1000" className='bg-gray-900 mb-6'>

            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className='rounded-xl w-full object-cover h-40' />
                </PhotoView>
            </PhotoProvider>
            <div class="relative text-center p-4">
                <p className="text-2xl font-bold text-lime-100 mb-4">{foodName}</p>
                <p className="text-lg font-medium uppercase tracking-widest text-lime-200 mb-3">
                    Price: ${price}
                </p>
                <div>
                    <p className="text-sm text-lime-100 mb-3">
                        {details.length > 100 ? details.slice(0, 100) + "..." : details}
                    </p>

                    <Link
                        className="group relative inline-block overflow-hidden border border-lime-600 px-8 py-3 focus:outline-none focus:ring"
                        to={`/services/${_id}`}
                    >
                        <span
                            className="absolute inset-x-0 bottom-0 h-[2px] bg-lime-600 transition-all group-hover:h-full group-active:bg-lime-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-lime-600 transition-colors group-hover:text-white"
                        >
                            View Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;