import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../Assets/images/gif/120735-fast-food.gif';
import logo from '../../../Assets/Logo/logo.png';

const Login = () => {
    return (

        <section className="bg-lime-200 mb-20 mt-10">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside
                    className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Pattern"
                        src={image}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main
                    aria-label="Main"
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <Link className="block text-blue-600" to="/home">
                            <span className="sr-only">Home</span>
                            <img className="sm:h-10 lg:h-14" src={logo} alt="" />

                        </Link>

                        <h1
                            className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                        >
                            Welcome to Foodaholic. <br /> Login here!
                        </h1>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                                    User Name
                                </label>

                                <input
                                    type="text"
                                    id="Name"
                                    name="name"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="password"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password Confirmation
                                </label>

                                <input
                                    type="password"
                                    id="PasswordConfirmation"
                                    name="password_confirmation"
                                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">

                                <button
                                    className="inline-block rounded bg-lime-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-lime-500"

                                >
                                    Log In
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account?
                                    <Link to="/signup" className="text-gray-700 underline">Sign Up</Link> here.
                                </p>

                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Login with Socials?
                                </p>
                                <button
                                    className="inline-flex items-center rounded border-2 bg-lime-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-lime-700 focus:outline-none focus:ring active:opacity-75"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Google
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default Login;