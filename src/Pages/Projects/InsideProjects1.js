import React from 'react';
import recyclelibimg1 from '../../Assets/recyclelibss.png'
import recyclelibimg2 from '../../Assets/rl2.png'
import recyclelibimg3 from '../../Assets/rl3.png'

const InsideProjects1 = () => {



    return (
        <div >
            <div className='text-white pl-24 pt-10 flex flex-col justify-center'>
                <div className=''>
                    <h1 className='text-2xl font-semibold'>Details about this site</h1>

                    <p>1. Site is about buy/sell books.</p>
                    <p>2. Made with html, tailwind, daisyUI, JavaScript, ReactJS.</p>
                    <p>3. For database Node, Express and mongodb used.</p>
                    <p>4. Firebase authentication system.</p>
                    <p>5. payment system with striped</p>
                </div>

            </div>
            <div className='mx-5 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-16 py-10'>
                <img src={recyclelibimg1} className='rounded-2xl' alt="" />
                <img src={recyclelibimg2} className='rounded-2xl' alt="" />
                <img src={recyclelibimg3} className='rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default InsideProjects1;