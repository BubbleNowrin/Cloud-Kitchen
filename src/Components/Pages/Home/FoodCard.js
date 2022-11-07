import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { image, name, details, price } = food;
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl image-full mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl text-lime-100">{name}</h2>
                <p className='text-md'>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
                <p className="text-3xl text-lime-100">Price:${price}</p>
                <div>
                    <Link
                        className="group relative inline-block focus:outline-none focus:ring"
                        to="/download"
                    >
                        <span
                            className="absolute inset-0 translate-x-0 translate-y-0 bg-lime-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                        ></span>

                        <span
                            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                        >
                            Details
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;