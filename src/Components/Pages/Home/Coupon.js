import React from 'react';
import { Link } from 'react-router-dom';

const Coupon = () => {
    return (
        <div className="p-6 py-12 bg-lime-200 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-lime-800 text-6xl tracking-tighter font-bold">Up to
                        <br className="sm:hidden" /> 20% Off
                    </h2>
                    <div className="text-lime-800 space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free Delivery! Use code:</span>
                        <span className="font-bold text-lg text-lime-800">FOOD20</span>
                    </div>
                    <Link
                        className="group relative inline-block focus:outline-none focus:ring"
                        to="/services"
                    >
                        <span
                            className="absolute inset-0 translate-x-0 translate-y-0 bg-lime-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                        ></span>

                        <span
                            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
                        >
                            Order Now
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Coupon;