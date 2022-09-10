import React from 'react';
import Button from './button';
import { card, drone2, glassesCut1 } from '../assets';
import styles, { layout } from '../style';

const SignUp = () => {
	return (
		<section className={`${layout.section} `}>
			<div className="bg-black-gradient-3 md:bg-transparent rounded-[25px]">
				<div className="rounded-[25px] grid grid-cols-1 md:grid-cols-2 md:justify-center md:items-end gap-4 relative">
					<div className="hidden md:block bg-black-gradient rounded-[25px] w-full absolute bottom-0 right-0 left-0 h-[85%] z-[0]">
						<div className={` hidden md:block w-full h-full`}>
							<div className=" mt-9 lg:mt-12 flex flex-col justify-center items-start  ml-9 mb-5">
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
										className=" w-[290px] lg:w-full rounded-l-lg w-full leading-0 py-4 px-6 font-poppins  outline-none font-medium text-[18px] "
									/>

									<button
										type="button"
										className={`py-4 px-6 font-poppins bg-blue-gradient font-medium text-[18px] text-primary rounded-r-lg outline-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 `}
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className={` block md:invisible w-full h-auto`}>
						<h2 className={`${styles.heading2} md:text-[38px] mg:text-[40px]`}>
							Cross continental <br className="hidden sm:block" />
							flights with our new <br className="hidden sm:block" />
							tactical drone
						</h2>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eaque
							culpa magni assumenda asperiores cupiditate aliquam inventore iste
							consequuntur nemo?
						</p>
						<Button styles={'mt-10'} text={'Preorder'} />
					</div>
					<div className={`box order-last ${layout.sectionImg}`}>
						<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
						<img
							src={glassesCut1}
							alt="drone"
							className="w-full h-full relative z-[5]  obejct-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
