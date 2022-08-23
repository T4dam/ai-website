import { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<div className="w-[124px] h-[32px] bg-slate-600"></div>
			<ul className="sm:flex hidden list-none justify-end items-center flex-1">
				{navLinks.map((item, index) => (
					<li
						key={item.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}
					>
						<a href={`#${item.id}`}>{item.title}</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					onClick={() => setToggle((prev) => !prev)}
					className="w-[28px] h-[28px] cursor-pointer"
				/>
				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="flex flex-col list-none justify-end items-center flex-1">
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
									index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
								}`}
							>
								<a href={`#${item.id}`}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
