import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
// import { logo } from './../assets';
import { motion } from 'framer-motion';
import logo from './../assets/logo.svg';
import { GrFormNext } from 'react-icons/gr';
import styles from '../style';

const HowItWorksCard = ({ id, shadow, title, icon, discription }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	return (
		<div className="w-100 perspetive flex items-center justify-center">
			<motion.div
				drag
				whileTap={{ cursor: 'grabbing' }}
				dragElastic={0.16}
				dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
				style={{ x, y, rotateX, rotateY, z: 100 }}
				className=" w-full mg:w-[285px] lg:w-[320px] ll:w-[340px] h-[500px] xs:h-[265px] md:h-[500px] flex flex-col xs:flex-row md:flex-col rounded-[25px] shadow-lg cards relative cursor-grab"
			>
				<div className="w-full flex flex-col flex-[1.2] relative items-center justify-end py-[1em] px-[15px]">
					<div className=" absolute top-0 left-0 w-[100%] overflow-hidden h-[100%]  rounded-tr-[25px]">
						<div
							className={`w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-blue-gradient cursor-pointer absolute top-4 left-4`}
						>
							<motion.div
								whileHover={{
									position: 'relative',
									zIndex: 1,
									scale: [1, 1.4, 1.2],
									transition: {
										duration: 0.2,
									},
								}}
								className={`${styles.flexCenter} w-[38px] h-[38px] rounded-full bg-black-gradient`}
							>
								<p className="font-semibold text-white text-2xl">{id}</p>
								{/* <img src="" alt="" className="w-[50%] h-[50%] object-contain" /> */}
							</motion.div>
						</div>
						{/* <div className="absolute w-[350px] h-[350px] top-[-4.2em] right-[-10em] z-[5] bg-[#24a2b5] rounded-[50%]"></div> */}
					</div>
					<div className="w-full h-full flex items-center justify-center">
						<img
							src={shadow}
							alt=""
							unselectable="on"
							className="w-auto h-full userselect-none w-[190px] h-[190px] blur-[2px]"
						/>
					</div>
					<div className="w-full h-full absolute flex items-center justify-center">
						<motion.div
							style={{ x, y, rotateX, rotateY, z: 100000 }}
							drag
							whileTap={{ cursor: 'grabbing' }}
							dragElastic={0.12}
							unselectable="on"
							className="w-auto h-[190px] z-[99] userselect-none "
						>
							<img
								src={icon}
								alt=""
								unselectable="on"
								className="w-auto h-full userselect-none"
							/>
						</motion.div>
					</div>
					<h2 className="hidden md:block m-none font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>
				</div>
				<div className="flex flex-[0.8] w-full h-full flex-col xs:justify-center gap-1  px-[1em] md:pb-[3em]">
					<h2 className="md:hidden  m-none font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>

					<p className="font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite max-w-[300px]">
						{discription}
					</p>
					<div className=" inline-block md:h-full flex flex-col md:justify-end">
						<a className=" mt-2 md:mt-0 block w-[190px] md:w-[130px] flex flex-row  items-center text-white font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite cursor-pointer ">
							Learn more
							<div className=" inline-block flex justify-center items-center ml-2 w-[20px] h-[20px] bg-[#00F6FF]  rounded-[50%]">
								<GrFormNext />
							</div>
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
export default HowItWorksCard;
