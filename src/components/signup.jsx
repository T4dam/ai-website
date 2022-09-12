import React from 'react';
import Button from './button';
// import { card, drone2, glassesCut1 } from '../assets';
import styles, { layout } from '../style';

const SignUp = () => {
	return (
		<section className={`${layout.section} `}>
			<div className="overflow-hidden bg-black-gradient-3 md:bg-transparent rounded-[25px]">
				<div className="rounded-[25px] grid grid-cols-1 md:grid-cols-2 md:justify-center md:items-end gap-4 relative">
					<div className="hidden md:block overflow-hidden bg-black-gradient rounded-[25px] w-full absolute bottom-0 right-0 left-0 h-[85%] z-[0]">
						<div className={` hidden md:block w-full h-full`}>
							<div className=" mt-9 lg:mt-16 flex flex-col justify-center items-start  ml-9 mb-5">
								<h2
									className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[55px] leading-[50px]  md:text-[38px] mg:text-[40px]`}
								>
									Join our newsletter for
									<br className="hidden sm:block" />
									discounts and events
								</h2>
								<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
									eaque culpa magni assumenda.
								</p>
								<form
									action=""
									className="mt-7 w-[500px] flex justify-start items-center"
								>
									<input
										type="email"
										placeholder="Email"
										className="  border border-slate-300 w-[290px] h-[50px] lg:w-full rounded-l-lg w-full leading-0 py-3 px-6 font-poppins  outline-none font-medium text-[18px] text-white  "
									/>

									<button
										type="button"
										className={` hover:bg-gradient-to-b from-cyan-300 to-[#3c98af] hover:text-black h-[50px] py-3 px-6 font-poppins border border-cyan-300 text-cyan-300 font-medium text-[18px] text-primary rounded-r-lg outline-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 transition-all duration-300 flex justify-center items-center `}
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className={` block md:invisible w-full h-auto`}>
						<div className=" mt-9 lg:mt-16 flex flex-col justify-center items-start px-4 xs:px-2 ml-0 xs:mx-9 mb-5">
							<h2
								className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[55px] leading-[50px]  md:text-[38px] mg:text-[40px]`}
							>
								Join our newsletter for <br className="hidden sm:block" />
								discounts and events
							</h2>
							<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
								eaque culpa magni assumenda.
							</p>
							<form
								action=""
								className="mt-7 w-full ss:w-[500px] flex justify-start items-center"
							>
								<input
									type="email"
									placeholder="Email"
									className="w-full ss:w-[290px] lg:w-full  border border-slate-300  h-[50px] lg:w-full rounded-l-lg w-full leading-0 py-3 px-6 font-poppins  outline-none font-medium text-[18px] text-white "
								/>

								<button
									type="button"
									className={`py-4 px-2 xs:py-3 xs:px-6 hover:bg-gradient-to-b from-cyan-300 to-[#3c98af] hover:text-black h-[50px] py-3 px-6 font-poppins border border-cyan-300 text-cyan-300 font-medium text-[18px] text-primary rounded-r-lg outline-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 transition-all duration-300 flex justify-center items-center  `}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
					<div className={`box order-last ${layout.sectionImg}`}>
						<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
						{/* <img
							src={glassesCut1}
							alt="drone"
							className="w-full h-full relative z-[5]  obejct-cover"
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
