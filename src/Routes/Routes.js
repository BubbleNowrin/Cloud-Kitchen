import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/Pages/AddService/AddService";
import Blogs from "../Components/Pages/Blogs/Blogs";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Reviews from "../Components/Pages/Reviews/Reviews";
import UpdateReview from "../Components/Pages/Reviews/UpdateReview";
import CustomerReviews from "../Components/Pages/Services/CustomerReviews";
import Details from "../Components/Pages/Services/Details";
import Services from "../Components/Pages/Services/Services";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layouts/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


export const routes = createBrowserRouter([

    //routes setup

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://cloud-kitchen-server-sepia.vercel.app/food'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('https://cloud-kitchen-server-sepia.vercel.app/food'),
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://cloud-kitchen-server-sepia.vercel.app/foods/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/reviews',
                element: <PrivateRoutes><Reviews></Reviews></PrivateRoutes>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://cloud-kitchen-server-sepia.vercel.app/update/${params.id}`),
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/add',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
        ]
    }
])