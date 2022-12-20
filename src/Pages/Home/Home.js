import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import dp from '../../Assets/dp.jpg'

const Home = () => {
    return (
        <>
            <div className='pt-10  mb-5 pb-5 text-white lg:pl-24 flex flex-col lg:flex-row justify-center items-center'>
                <div className='pl-5 lg:pl-0'>
                    <h1 className='py-1 pl-1 text-3xl font-semibold text-green-300'>
                        Hey there! I'm
                    </h1>
                    <h1 className='text-6xl font-bold'>MD Mahfujur Rahman.</h1>
                    <div className='py-2 pl-1 mb-5 text-2xl font-bold'>
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "I'm a Front-End Developer",
                                    "I code cool websites",
                                    "I love coding",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </div>
                    <a
                        href='https://drive.google.com/file/d/13VGl8SmATXAqcbQTT4lOlg0uGPmiRxl-/view'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-3 font-semibold duration-300 ease-in-out border-2 border-white hover:bg-white hover:text-black rounded-2xl'>
                        Download Resume
                    </a>
                </div>
                <div className='mt-16 lg:mt-5'>
                    <img className='w-full lg:w-2/3' src={dp} alt="" />
                </div>

            </div>



            <Projects></Projects>
            <About></About>
            <Contact></Contact>


        </>
    );
};

export default Home;