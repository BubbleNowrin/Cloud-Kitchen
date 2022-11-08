import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/Pages/AddService/AddService";
import Blogs from "../Components/Pages/Blogs/Blogs";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Reviews from "../Components/Pages/Reviews/Reviews";
import Details from "../Components/Pages/Services/Details";
import Services from "../Components/Pages/Services/Services";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Main from "../Layouts/Main";


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
                element: <Reviews></Reviews>
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
                element: <AddService></AddService>
            }
        ]
    }
])