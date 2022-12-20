import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import esportsHeroImg from '../../Assets/esportsHeroSS.png'
import recycleLibImg from '../../Assets/recyclelibss.png'
import yourmedico from '../../Assets/ym1.png'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div>
            <div className='pb-10 mx-5 md:mx-24 pt-16'>
                <h1 className='text-3xl font-bold'>All Creative Works.</h1>
                <p className='text-xl'>Here's some of my projects that I have worked on.</p>
            </div>

            <div className='mx-5 md:mx-24 grid grid-cols-1 lg:grid-cols-2 gap-16'>

                <div>
                    {/*  1st project */}

                    <Link to='/p1' className='rounded-2xl  '>
                        <img className='object-cover rounded-t-2xl' src={recycleLibImg} alt="" />
                        <div className='p-5 border-2 border-gray-400/30 rounded-b-2xl hover:bg-white/5'>
                            <div className='flex justify-between items-center pb-5'>
                                <h1 className='font-bold text-2xl'>RecycleLiB</h1>
                                <div className='flex items-center'>
                                    <a className='mr-3' target='_blank' href='https://github.com/mahfujurr/recycleLib' rel="noreferrer">
                                        <BsGithub className='' />
                                    </a>
                                    <a target='_blank' href='https://recyclelib.web.app/' rel="noreferrer">
                                        <FiExternalLink className='' />
                                    </a>
                                </div>
                            </div>
                            <div className='flex mb-2'>

                                <h1 className='text-blue-300 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaReact className='mr-1' /> React </h1>
                                <h1 className='text-blue-500 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><TbBrandTailwind className='mr-2' /> Tailwind </h1>
                                <h1 className='text-green-600 bg-green-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaNodeJs className='mr-2' /> Node.js </h1>
                                <h1 className='text-green-400 bg-green-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><SiMongodb className='mr-1' /> MongoDB </h1>


                            </div>
                            <hr />
                            <p className='text-gray-400 pt-1'>
                                When you buy a used book, you never know what you are going to get. Inscriptions in margins or dedications in the front page. You’re taking part in a shared history and better yet, you’re free to add your own little mark along the way too.
                            </p>
                        </div>
                    </Link>

                    {/*  3rd project under 1st one */}

                    <div className='rounded-2xl  mt-24'>
                        <img className='object-cover rounded-t-2xl' src={yourmedico} alt="" />
                        <div className='p-5 border-2 border-gray-400/30 rounded-b-2xl hover:bg-white/5'>
                            <div className='flex justify-between items-center pb-5'>
                                <h1 className='font-bold text-2xl'>Your Medico</h1>
                                <div className='flex items-center'>
                                    <a className='mr-3' target='_blank' href='https://github.com/mahfujurr/yourmedico' rel="noreferrer">
                                        <BsGithub className='' />
                                    </a>
                                    <a target='_blank' href='https://yourmedico-100da.firebaseapp.com/' rel="noreferrer">
                                        <FiExternalLink className='' />
                                    </a>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <h1 className='text-blue-300 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaReact className='mr-1' /> React </h1>
                                <h1 className='text-yellow-300 bg-yellow-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaJsSquare className='mr-2' /> JavaScript </h1>
                                <h1 className='text-blue-500 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><TbBrandTailwind className='mr-2' /> Tailwind </h1>

                            </div>
                            <hr />
                            <p className='text-gray-400 pt-1'>
                                You know when your smile is less than great. It’s why you hide your smile behind your hand or refuse to let anyone see your teeth. When you don’t smile, people tend to judge you harshly and think you’re unhappy even when you’re in a really good mood.
                            </p>
                        </div>
                    </div>

                </div>











                <div className='rounded-2xl '>
                    <img className='object-cover rounded-t-2xl' src={esportsHeroImg} alt="" />
                    <div className='p-5 border-2 border-gray-400/30 rounded-b-2xl hover:bg-white/5'>
                        <div className='flex justify-between items-center pb-5'>
                            <h1 className='font-bold text-2xl'>EsportsHero</h1>
                            <div className='flex items-center'>
                                <a className='mr-3' target='_blank' href='https://github.com/mahfujurr/esports-hero' rel="noreferrer">
                                    <BsGithub className='' />
                                </a>
                                <a target='_blank' href='https://esports-hero.netlify.app/' rel="noreferrer">
                                    <FiExternalLink className='' />
                                </a>
                            </div>
                        </div>
                        <div className='flex mb-2'>
                            <h1 className='text-blue-300 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaReact className='mr-1' /> React </h1>
                            <h1 className='text-yellow-300 bg-yellow-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><FaJsSquare className='mr-2' /> JavaScript </h1>
                            <h1 className='text-blue-500 bg-blue-900/40 px-2 py-0 text-sm lg:text-base  flex font-bold  items-center rounded-lg mr-3'><TbBrandTailwind className='mr-2' /> Tailwind </h1>

                        </div>
                        <hr />
                        <p className='text-gray-400 pt-1'>
                            The Definitive Guide 2022, These Guides provide strategy's on how to turn your gaming kills into a career.By working in close collaboration with educators, coaches, researchers, analysts, and professional players, Learn2Esport
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;