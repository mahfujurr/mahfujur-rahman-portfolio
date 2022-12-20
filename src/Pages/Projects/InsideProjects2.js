import React from 'react';
import ym1 from '../../Assets/ym1.png'
import ym2 from '../../Assets/ym2.png'
import ym3 from '../../Assets/ym3.png'


const InsideProjects2 = () => {
    return (
        <div>
            <div className='text-white pl-24 pt-10 flex flex-col justify-center'>
                <div className=''>
                    <h1 className='text-2xl font-semibold'>Details about this site</h1>

                    <p>1. ReactJS and Tailwind has been used to develop this website.</p>
                    <p>2. This site is about a Dental Doctor service.</p>
                    <p>3. I have added some dental services where user can give there opinion about that service.</p>
                    <p>4. Firebase authentication system. Also users can add there own services.</p>
                    <p>5. And at last not least used mongodb as it's database for api's.</p>
                </div>

            </div>
            <div className='mx-5 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-16 py-10'>
                <img src={ym1} className='rounded-2xl' alt="" />
                <img src={ym2} className='rounded-2xl' alt="" />
                <img src={ym3} className='rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default InsideProjects2;