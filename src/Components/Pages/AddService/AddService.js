import React from 'react';
import { Helmet } from 'react-helmet-async';
import png from "../../../Assets/images/gif/Publish article-bro.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.name.value;
        const image = form.image.value;
        const details = form.details.value;
        const price = form.price.value;
        const date = new Date();

        const newService = {
            foodName,
            image,
            details,
            price,
            date
        }

        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.acknowledged) {
                    showToast();
                }

            })

    }

    const showToast = () => {
        toast.success("Service Added Successfully", { autoclose: 5000 });
    }
    return (

        <section className="bg-lime-200 mt-10 mb-24">
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                    className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Pattern"
                        src={png}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <h1
                            className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Add Service
                        </h1>

                        <form onSubmit={handleAddService} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">
                                    Service Name
                                </label>

                                <input
                                    type="text"
                                    id="serviceName"
                                    name="name"
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="serviceImage" className="block text-sm font-medium text-gray-700">
                                    PhotoURL
                                </label>

                                <input
                                    type="text"
                                    id="serviceImage"
                                    name="image"
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>

                                <input
                                    type="text"
                                    id="Price"
                                    name="price"
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                                    Details
                                </label>

                                <input
                                    type="text"
                                    name="details"
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"

                                >
                                    <span
                                        class="absolute inset-0 border border-lime-600 group-active:border-lime-500"
                                    ></span>
                                    <span
                                        class="block border border-lime-600 bg-lime-600 px-12 py-3 transition-transform active:border-lime-500 active:bg-lime-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Add Service
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default AddService;