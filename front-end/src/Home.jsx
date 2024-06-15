import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-3xl font-bold'>Welcome to My Home Page</h1>
            <p className='text-lg mt-4'>Please login or register to continue.</p>
            <div className='flex gap-4 mt-6'>
                <Link to="/login" className='px-6 py-2 bg-blue-500 text-white rounded-lg'>
                    Login
                </Link>
                <Link to="/register" className='px-6 py-2 bg-green-500 text-white rounded-lg'>
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Home;
