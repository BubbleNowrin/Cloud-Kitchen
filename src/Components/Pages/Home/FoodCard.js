import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { image, foodName, details, price, _id } = food;
    return (

        <div data-aos="fade-left"
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
                <div className="mt-20">
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
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;