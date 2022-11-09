import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {

    const { image, foodName, details, price, _id } = food;
    return (
        // <div className="card lg:w-96 bg-base-100 shadow-xl image-full mx-auto">
        //     <figure><img src={image} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title text-2xl text-lime-100">{name}</h2>
        //         <p className='text-md'>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
        //         <p className="text-3xl text-lime-100">Price:${price}</p>
        //         <div>
        //             <Link
        //                 className="group relative inline-block focus:outline-none focus:ring"
        //                 to={`/details/${_id}`}
        //             >
        //                 <span
        //                     className="absolute inset-0 translate-x-0 translate-y-0 bg-lime-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
        //                 ></span>

        //                 <span
        //                     className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
        //                 >
        //                     Details
        //                 </span>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div class="group relative block bg-black">

            <img
                alt="Developer"
                src={image}
                class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div class="relative p-8">
                <p class="text-4xl font-bold text-lime-100 mb-4">{foodName}</p>
                <p class="text-xl font-medium uppercase tracking-widest text-white">
                    Price: ${price}
                </p>
                <div class="mt-20">
                    <div
                        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <PhotoProvider>
                            <PhotoView src={image}>
                                <img className='w-full h-32 object-cover' src={image} alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <p class="text-sm text-white">
                            {details.length > 100 ? details.slice(0, 100) + "..." : details}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;