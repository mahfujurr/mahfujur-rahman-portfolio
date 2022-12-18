import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, BriefcaseIcon, DocumentIcon, HomeIcon, IdentificationIcon } from '@heroicons/react/24/solid'
const Navbar = () => {

    return (
        <div className=' flex justify-center pt-5 sticky font-semibold '>
            <div className='flex  bg-green-200/10 rounded-full px-10 py-5 text-white'>
                <Link to='/' className='mx-2 flex flex-col justify-center items-center hover:text-green-400'>
                    <HomeIcon className="h-6 w-6 text-white hover:text-green-400" />
                    <h1 className=''>Home</h1>
                </Link>
                <Link to='/about' className='mx-2 flex flex-col justify-center items-center hover:text-green-400'>
                    <IdentificationIcon className="h-6 w-6 text-white hover:text-green-400" />
                    <h1 className=''>About</h1>
                </Link>
                <a href='https://drive.google.com/file/d/13VGl8SmATXAqcbQTT4lOlg0uGPmiRxl-/view' className='mx-2 flex flex-col justify-center items-center hover:text-green-400'>
                    <DocumentIcon className="h-6 w-6 text-white hover:text-green-400" />
                    <h1 className=''>Resume</h1>
                </a>
                <Link to='/projects' className='mx-2 flex flex-col justify-center items-center hover:text-green-400'>
                    <BriefcaseIcon className="h-6 w-6 text-white hover:text-green-400" />
                    <h1 className=''>Projects</h1>
                </Link>
                <Link to='/blog' className='mx-2 flex flex-col justify-center items-center hover:text-green-400'>
                    <BookOpenIcon className="h-6 w-6 text-white hover:text-green-400" />
                    <h1 className=''>Blog</h1>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;