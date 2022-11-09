import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [foods, setFoods] = useState([]);
    // const { loading, setLoading } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    //load the services 
    useEffect(() => {
        fetch('https://cloud-kitchen-server-sepia.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setLoading(false);
            })

    }, [setLoading])

    if (loading) {
        return <div className='h-[60vh] flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-lime-700"></div></div>
    }
    return (
        <div>
            <Helmet>
                <title>Services</title>
            </Helmet>
            <div className="space-y-2 text-center my-8">
                <h2 className="text-5xl font-bold text-lime-500">Items I Cook</h2>
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