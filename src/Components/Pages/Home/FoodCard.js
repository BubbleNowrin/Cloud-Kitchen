import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { image, foodName, details, price, _id } = food;
    return (

        <div data-aos="zoom-in-down"
            data-aos-duration="1000" className="group relative block bg-black">

            <img
                alt="Developer"
                src={image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-8">
                <p className="text-4xl font-bold text-lime-100 mb-4">{foodName}</p>
                <p className="text-xl font-medium uppercase tracking-widest text-white">
                    Price: ${price}
                </p>
                <div className="h-full w-full">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='w-full h-32 object-cover' src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <p className="text-sm text-white">
                            {details.length > 100 ? details.slice(0, 100) + "..." : details}
                        </p>
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
        </div>

    );
};

export default FoodCard;