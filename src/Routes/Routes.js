import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/Pages/AddService/AddService";
import Blogs from "../Components/Pages/Blogs/Blogs";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Reviews from "../Components/Pages/Reviews/Reviews";
import Services from "../Components/Pages/Services/Services";
import Main from "../Layouts/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
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
                path: '/add',
                element: <AddService></AddService>
            }
        ]
    }
])