import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gif from '../../../Assets/images/gif/120735-fast-food.gif';
import image from "../../../Assets/images/gif/Computer login-bro.png";
import logo from '../../../Assets/Logo/logo.png';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [loader, setLoader] = useState(false);
    const { signIn, googleLogin } = useContext(AuthContext);

    //google provider
    const googleProvider = new GoogleAuthProvider();

    //get location
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        setLoader(true);
        event.preventDefault();
        //get the user info
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                showToast();
                const currentUser = {
                    email: user.email
                }

                //get jwt token
                fetch('https://cloud-kitchen-server-sepia.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate(from, { replace: true });
                        localStorage.setItem('token', data.token);
                    })

                form.reset();
                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                if (error) {
                    showError(errorMessage);
                }

            })
    }

    const handleGoogleLogin = () => {
        setLoader(true);
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                showToast();
                const currentUser = {
                    email: user.email
                }

                //get jwt token
                fetch('https://cloud-kitchen-server-sepia.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })

                setLoader(false);

            })
            .catch(error => {
                setLoader(false);
                const errorCode = error.code;
                const errorMessage = error.message;
                if (error) {
                    showError(errorMessage);
                }
                console.log(errorMessage);
            })
    }

    if (loader) {
        return <div className='h-[60vh] flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-lime-700"></div></div>
    }

    //toast
    const showToast = () => {
        toast.success("Successfully logged in", { autoclose: 5000 });
    }

    const showError = (err) => {
        toast.error(err, { autoclose: 5000 })
    }

    return (

        <section className="bg-lime-200 mb-20 mt-10">
            <Helmet>
                <title>Login</title>
            </Helmet>
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

                        <form onSubmit={handleLogin} className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
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
                                    className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 flex items-center flex-col mb-4 gap-4">

                                <button
                                    className="inline-block rounded bg-lime-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-lime-500"

                                >
                                    Log In
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Don't have an account?
                                    <Link to="/signup" className="text-gray-700 underline font-bold">Sign Up</Link> here.
                                </p>

                            </div>
                        </form>
                        <div className="col-span-6 flex items-center flex-col mb-4 gap-4">
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Login with Socials?
                            </p>
                            <button onClick={handleGoogleLogin}
                                className="inline-flex items-center rounded border-2 bg-lime-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-lime-700 focus:outline-none focus:ring active:opacity-75"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google <FaGoogle className='ml-2'></FaGoogle>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </section>

    );
};

export default Login;