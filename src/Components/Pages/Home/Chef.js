import React from 'react';
import chef from "../../../Assets/images/gif/120972-chef.gif"

const Chef = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center text-lime-600 sm:text-5xl">Meet The Cook</h1>
                <p className="max-w-2xl text-center text-gray-800">I am Tom Johanson. The chef of Foodaholic.It's my cloud kitchen I'm a cook by profession but a foodie by passion.So, i know exactly what you are looking for. And here I am with my special dishes to make your taste bud satisfied...</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full" src={chef} />
                        <p className="text-xl font-semibold leading-tight text-lime-600">Tom Johanson</p>
                        <p className="dark:text-gray-400">Home Cook</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chef;