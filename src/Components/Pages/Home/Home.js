import React from 'react';
import burger from "../../../Assets/images/carouselImages/burger.jpg";
import pizza from "../../../Assets/images/carouselImages/pizza2.jpg";
import pasta from "../../../Assets/images/carouselImages/pasta.jpg";
import salad from "../../../Assets/images/carouselImages/salad.jpg";
import steak from "../../../Assets/images/carouselImages/steak.jpg";
import fish from "../../../Assets/images/carouselImages/fish.jpg";
import pizza2 from "../../../Assets/images/carouselImages/pizza.jpg";
import { Link, useLoaderData } from 'react-router-dom';
import FoodCard from './FoodCard';
import Steps from './Steps';
import Coupon from './Coupon';
import Subscribe from './Subscribe';


const Home = () => {

    const foods = useLoaderData();

    return (
        <div>
            <section>
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900 text-lime-500">Foodaholic</h1>
                        <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-900 text-lime-700">Welcome to Foodaholic, home of your favourite cuisine, fast food and Many more. </p>
                        <div className="flex flex-wrap justify-center">
                            <Link
                                className="inline-block rounded bg-gradient-to-r from-lime-500 via-green-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                to="/services"
                            >
                                <span
                                    className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                                >
                                    View Foods
                                </span>
                            </Link>

                            <Link
                                className="inline-block rounded-full bg-gradient-to-r from-lime-500 via-green-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                                to="/reviews"
                            >
                                <span
                                    className="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                                >
                                    Reviews
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={burger} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn glass btn-circle">❮</a>
                                <a href="#slide2" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={pizza} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn glass btn-circle">❮</a>
                                <a href="#slide3" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={pasta} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn glass btn-circle">❮</a>
                                <a href="#slide4" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={salad} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn glass btn-circle">❮</a>
                                <a href="#slide5" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img src={steak} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn glass btn-circle">❮</a>
                                <a href="#slide6" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-full">
                            <img src={fish} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn glass btn-circle">❮</a>
                                <a href="#slide7" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide7" className="carousel-item relative w-full">
                            <img src={pizza2} alt="" className="w-full h-96" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn glass btn-circle">❮</a>
                                <a href="#slide1" className="btn glass btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="space-y-2 text-center my-8">
                <h2 className="text-5xl font-bold text-lime-500">Our Popular Items</h2>
                <p className="font-serif text-md text-lime-700">Italian Cuisine is the most sold item of our kitchen. Check it Out!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <div className="space-y-2 text-center my-8">
                <Link
                    className="inline-block rounded bg-gradient-to-r from-lime-500 via-green-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                    to="/services"
                >
                    <span
                        className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                    >
                        See All
                    </span>
                </Link>
            </div>
            <Steps></Steps>
            <Coupon></Coupon>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;