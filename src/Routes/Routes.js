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
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/food'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/food'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/foods'),
                element: <Services></Services>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`),
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
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`),
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