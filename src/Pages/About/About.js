import React from 'react';

const About = () => {
    return (
        <div className=' px-5 md:px-24 lg:px-48 pb-96 pt-24'>
            <h1 className='text-4xl font-bold py-5'>⚡ About Me</h1>
            <p className='w-full lg:w-1/2 text-gray-300/80'>
                Hey! I'm MD Mahfujur Rahman, I've been close to a computer since an early age, and been passionate about it ever since.

                I really liked to build stuff using no-code tools
                back in 2016, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies.
                I'm interested in building something awesome with code and automate tasks with code, currently focused on Web Development,

                <span className='pt-5'>
                    When I'm not coding I play games with my friends, watch some show, or if the weather's good then go out for a walk!
                </span>
            </p>
        </div>
    );
};

export default About;