import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-black text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;