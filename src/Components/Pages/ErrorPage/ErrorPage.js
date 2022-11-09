import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import errorPic from '../../../Assets/images/gif/9195-error.gif';

const ErrorPage = () => {

    //Get The Error 
    const error = useRouteError();

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='mb-20 flex flex-col items-center justify-center'>
                <img src={errorPic} alt="" />
                <div>
                    <h2 className='text-red-600 font-bold'>{error.status}</h2>
                    <p className='text-red-600 text-2xl font-bold'>{error.statusText}</p>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ErrorPage;