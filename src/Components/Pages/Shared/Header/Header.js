import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../../Assets/Logo/logo.png";
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //logout implementation
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.error(err))
    }
    return (
        <div className="bg-lime-100">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Foodaholic"
                        className="inline-flex items-center"
                    >
                        <img className="w-8 lg:w-14 text-teal-accent-400" src={logo} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-lime-500 uppercase">
                            Foodaholic
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/home"
                                aria-label="Product pricing"
                                title="About Us"
                                className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                aria-label="Our product"
                                title="Services"
                                className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                aria-label="Our product"
                                title="Blogs"
                                className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blogs
                            </Link>
                        </li>

                        {
                            (user?.email ?
                                <>
                                    <li>
                                        <Link
                                            to="/reviews"
                                            aria-label="About us"
                                            title="Reviews"
                                            className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            My Reviews
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/add"
                                            aria-label="About us"
                                            title="Add Service"
                                            className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            Add Service
                                        </Link>
                                    </li>
                                    <li>
                                        <p

                                            aria-label="About us"
                                            title={user.displayName}
                                            className="font-medium tracking-wide text-lime-500  transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            <img style={{ height: '30px' }} className='rounded-full' src={user.photoURL} alt="" />
                                        </p>
                                    </li>
                                    <ul className="flex items-center hidden space-x-8 lg:flex">
                                        <li>
                                            <button
                                                onClick={handleLogOut}
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-lime-500  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Log out"
                                            >
                                                Log out
                                            </button>
                                        </li>
                                    </ul>

                                </>
                                :
                                <ul className="flex items-center hidden space-x-8 lg:flex">
                                    <li>
                                        <Link
                                            to="/login"
                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-lime-500  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                            aria-label="Sign up"
                                            title="Log In"
                                        >
                                            Log In
                                        </Link>
                                    </li>
                                </ul>
                            )
                        }
                    </ul>

                    <div className="lg:hidden z-10">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-lime-100 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Foodaholic"
                                                className="inline-flex items-center"
                                            >
                                                <img className="w-8 lg:w-14 text-deep-purple-accent-400" src={logo} alt="" />
                                                <span className="ml-2 text-xl font-bold tracking-wide text-lime-500 uppercase">
                                                    Foodaholic
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-lime-200 focus:bg-lime-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 z-10">
                                            <li>
                                                <Link
                                                    to="/home"
                                                    aria-label="Our product"
                                                    title="Home"
                                                    className="font-medium tracking-wide  text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/services"
                                                    aria-label="Our product"
                                                    title="Services"
                                                    className="font-medium tracking-wide  text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blogs"
                                                    aria-label="Product pricing"
                                                    title="Blogs"
                                                    className="font-medium tracking-wide  text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blogs
                                                </Link>
                                            </li>
                                            {
                                                user?.email ?
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/reviews"
                                                                aria-label="About us"
                                                                title="My Reviews"
                                                                className="font-medium tracking-wide  text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                My Reviews
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/add"
                                                                aria-label="About us"
                                                                title="Add Services"
                                                                className="font-medium tracking-wide  text-lime-500 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Add Services
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                onClick={handleLogOut}
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  text-lime-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign up"
                                                                title="Log In"
                                                            >
                                                                Log Out
                                                            </Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/login"
                                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  text-lime-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                                aria-label="Sign up"
                                                                title="Log In"
                                                            >
                                                                Log In
                                                            </Link>
                                                        </li>
                                                    </>
                                            }

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;