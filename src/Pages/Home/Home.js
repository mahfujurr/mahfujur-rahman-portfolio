import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Home = () => {
    return (
        <div className='text-white pl-10 lg:pl-24 pt-10'>
            <h1 className='font-semibold text-green-300 text-3xl py-1 pl-1'>Hey there! I'm</h1>
            <h1 className='font-bold text-6xl'>MD Mahfujur Rahman.</h1>
            <div className='font-bold text-2xl py-2 pl-1'>
                <TypewriterComponent
                    options={{
                        strings: [
                            "I'm a Front-End Developer",
                            "I code cool websites",
                            "I love coding"
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                    }}
                />
            </div>
        </div>
    );
};

export default Home;