import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
// import { logo } from './../assets';
import { motion } from 'framer-motion';
import logo from './../assets/logo.svg';

const HowItWorksCard = ({ id, title, icon, discription }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	console.log(title);
	return (
		<div className="w-100 perspetive flex items-center justify-center">
			<motion.div
				drag
				whileTap={{ cursor: 'grabbing' }}
				dragElastic={0.16}
				dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
				style={{ x, y, rotateX, rotateY, z: 100 }}
				className="w-[285px] h-[500px] flex flex-col rounded-[25px] shadow-lg cards  relative cursor-grab"
			>
				<div className="w-full flex flex-col flex-1 relative items-center justify-end py-[1em] px-[15px]">
					<div className=" absolute  top-0 right-0 min-w-[100%] overflow-hidden max-w-[100%]  rounded-tr-[25px]">
						<div className="absolute w-[350px] h-[350px] top-[-4.2em] right-[-10em] z-[5] bg-green-500 rounded-[50%]"></div>
					</div>
					<div className="w-full h-full absolute flex items-center justify-center">
						<motion.div
							style={{ x, y, rotateX, rotateY, z: 100000 }}
							drag
							// whileTap={{ cursor: 'grabbing' }}
							dragElastic={0.12}
							unselectable="on"
							className="w-auto h-[190px] z-[99] userselect-none "
						>
							<img
								src="/logo.svg"
								alt=""
								unselectable="on"
								className="w-auto h-full userselect-none"
							/>
						</motion.div>
					</div>
					<h2 className="m-none font-semibold text-2xl font-bold text-white font-poppins ">
						HELLO THERE
					</h2>
				</div>
				<div className="flex flex-1 px-[1em]">bottim</div>
			</motion.div>
		</div>
	);
};
export default HowItWorksCard;
