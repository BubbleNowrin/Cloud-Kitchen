import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logGif from '../../../Assets/images/gif/124956-login.gif';
import logo from '../../../Assets/Logo/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <section className="bg-lime-200 mt-10 mb-20">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section
                    className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                >
                    <img
                        alt="Night"
                        src={logGif}
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                </section>

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
                            Welcome to Foodaholic. <br /> Sign Up here!
                        </h1>

                        <form onSubmit={handleSignUp} className="mt-8 grid grid-cols-6 gap-6">
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

                            <div className="col-span-6">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
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


                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">

                                <button
                                    className="inline-block rounded bg-lime-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-lime-500"

                                >
                                    Sign Up
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account?
                                    <Link to="/login" className="text-gray-700 underline">Log In</Link> here.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default SignUp;