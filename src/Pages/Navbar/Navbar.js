import React from 'react';
import {
	BookOpenIcon,
	BriefcaseIcon,
	DocumentIcon,
	HomeIcon,
	IdentificationIcon,
	LinkIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<>
			<div className='sticky flex justify-center pt-5 font-semibold '>
				<div className='flex px-2 md:px-10 py-5 text-white rounded-full bg-green-200/10'>
					<Link
						to='/'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<HomeIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Home</h1>
					</Link>

					<a
						href='https://drive.google.com/file/d/13VGl8SmATXAqcbQTT4lOlg0uGPmiRxl-/view'
						target='_blank'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400' rel="noreferrer">
						<DocumentIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Resume</h1>
					</a>
					<Link
						to='projects'
						className='flex test2 flex-col items-center justify-center mx-2 hover:text-green-400'>
						<BriefcaseIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Projects</h1>
					</Link>
					<Link
						to='/about'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<IdentificationIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>About Me</h1>
					</Link>
					<Link
						to='/blog'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<BookOpenIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Blog</h1>
					</Link>

					<Link
						to='/contact'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<LinkIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Contact Me</h1>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;