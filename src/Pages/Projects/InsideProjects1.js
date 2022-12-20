import React from 'react';
import recyclelibimg1 from '../../Assets/recyclelibss.png'
import recyclelibimg2 from '../../Assets/rl2.png'
import recyclelibimg3 from '../../Assets/rl3.png'

const InsideProjects1 = () => {



    return (
        <div>
            <div className='mx-5 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10'>               
                <img src={recyclelibimg1} className='rounded-2xl' alt="" />
                <img src={recyclelibimg1} className='rounded-2xl' alt="" />
                <img src={recyclelibimg1} className='rounded-2xl' alt="" />
            </div>
        </div>
    );
};

export default InsideProjects1;