import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const foods = useLoaderData();

    return (
        <div>
            <div className="space-y-2 text-center my-8">
                <h2 className="text-5xl font-bold text-lime-500">Our Food Items</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 mb-40'>
                {
                    foods.map(food => <ServiceCard key={food._id} food={food}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;