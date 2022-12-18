import React from 'react';
// import { Link } from 'react-router-dom';
import {
	Link,
	DirectLink,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
import {
	BookOpenIcon,
	BriefcaseIcon,
	DocumentIcon,
	HomeIcon,
	IdentificationIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
	return (
		<>
			<div className='sticky flex justify-center pt-5 font-semibold '>
				<div className='flex px-10 py-5 text-white rounded-full bg-green-200/10'>
					<ul className='nav navbar-nav'>

						{/* <li>
							<Link
								activeClass='active'
								className='test2'
								to='test2'
								spy={true}
								smooth={true}
								duration={500}>
								Go to Section
							</Link>
						</li> */}

						{/* <li>
							{" "}
							<a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a>
						</li>
						<li>
							{" "}
							<a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a>
						</li>
						<li>
							{" "}
							<a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a>
						</li>
						<li>
							{" "}
							<a onClick={() => scroll.scrollMore(1000, { delay: 1500 })}>
								Scroll 1000 More! ( delay ){" "}
							</a>
						</li> */}
						{/* <li>
							<Link
								activeClass='active'
								className='test8'
								to='same'
								spy={true}
								smooth={true}
								duration={500}>
								Same target
							</Link>
						</li>
						<li>
							<Link
								activeClass='active'
								className='test9'
								to='same'
								spy={true}
								smooth={true}
								duration={500}>
								Same target
							</Link>
						</li>
						<li>
							<a className='test1' to='test1' onClick={() => this.scrollTo()}>
								Scroll to element
							</a>
						</li>
						<li>
							<a
								className='test1'
								to='test1'
								onClick={() => this.scrollToWithContainer()}>
								Scroll to element within container
							</a>
						</li> */}
					</ul>
					<Link
						to='/'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<HomeIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Home</h1>
					</Link>
					<Link
						to='/about'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<IdentificationIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>About</h1>
					</Link>
					<a
						href='https://drive.google.com/file/d/13VGl8SmATXAqcbQTT4lOlg0uGPmiRxl-/view'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<DocumentIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Resume</h1>
					</a>
					<Link
						activeClass='active'
						// className=''
						to='test2'
						spy={true}
						smooth={true}
						duration={500}
						// to='/projects'
						className='flex test2 flex-col items-center justify-center mx-2 hover:text-green-400'>
						<BriefcaseIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Projects</h1>
					</Link>
					<Link
						to='/blog'
						className='flex flex-col items-center justify-center mx-2 hover:text-green-400'>
						<BookOpenIcon className='w-6 h-6 text-white hover:text-green-400' />
						<h1 className=''>Blog</h1>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;