import React from 'react';
import eh1 from '../../Assets/esportsHeroSS.png'
import eh2 from '../../Assets/eh2.png'
import eh3 from '../../Assets/eh3.png'

const InsideProjects3 = () => {
    return (
        <div>
            <div className='text-white pl-24 pt-10 flex flex-col justify-center'>
                <div className=''>
                    <h1 className='text-2xl font-semibold'>Details about this site</h1>

                    <p>1. Site is about Esports courses.</p>
                    <p>2. Made with html, tailwind, daisyUI, JavaScript, ReactJS.</p>
                    <p>3. For database Node, Express and mongodb used.</p>
                    <p>4. Firebase authentication system.</p>
                    <p>5. payment system with striped</p>
                </div>

            </div>
            <div className='mx-5 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-16 py-10'>
                <img src={eh1} className='rounded-2xl' alt="" />
                <img src={eh2} className='rounded-2xl' alt="" />
                <img src={eh3} className='rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default InsideProjects3;