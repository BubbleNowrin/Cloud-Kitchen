import React from 'react';
import { Link } from 'react-router-dom';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ food }) => {
    const { image, name, details, price, _id } = food;
    return (
        <div className={'mx-auto max-w-xs rounded-md shadow-md bg-lime-200 dark:text-gray-100'}>
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{details.length > 100 ? details.slice(0, 100) + '...' : details}</p>
                    <p className='text-xl font-bold'>Price: ${price}</p>
                </div>
                <div className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md">
                    <Link
                        className="group relative inline-block overflow-hidden border border-lime-600 px-8 py-3 focus:outline-none focus:ring"
                        to={`/details/${_id}`}
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

export default ServiceCard;