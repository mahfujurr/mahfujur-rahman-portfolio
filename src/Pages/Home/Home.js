import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Home = () => {
    return (
        <div className='text-white'>
            <TypewriterComponent
                options={{
                    strings: [
                        'hi im murad'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                }}
            />
        </div>
    );
};

export default Home;