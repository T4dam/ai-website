import { useState } from 'react';
import { navLinks } from '../constants';
import { menu, close, logo } from '../assets';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<div className="w-[124px] h-[32px]  flex items-center gap-2">
				<img src={logo} alt="" className="w-[50px] h-[50px]" />
				<p className="font-poppins font-semibold text-white mt-[5px] text-xl">
					Aiddron
				</p>
			</div>
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
					} p-6 bg-black-gradient z-[99] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
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
