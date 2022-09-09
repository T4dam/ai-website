import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
// import { logo } from './../assets';
import { motion } from 'framer-motion';
import logo from './../assets/logo.svg';
import { GrFormNext } from 'react-icons/gr';
import styles from '../style';

const BlogCard = ({ id, title, img }) => {
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
				className=" w-full mg:w-[285px] lg:w-[320px] ll:w-[340px] h-[400px] xs:h-[265px] md:h-[500px] flex flex-col xs:flex-row md:flex-col rounded-[25px] shadow-lg cards relative cursor-grab"
			>
				<div className="w-full flex flex-col flex-1 xs:flex-[1.2] relative items-center justify-end">
					<div className="w-full h-full flex items-center justify-center">
						<img
							src={img}
							alt=""
							unselectable="on"
							className="w-auto h-full userselect-none cover object-cover"
						/>
					</div>
				</div>
				<div className="flex  flex-1 xs:flex-[0.8] w-full h-full flex-col xs:justify-center gap-2  px-[1em] md:pb-[3em]">
					<h2 className="hidden md:block m-none mt-3 font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>
					<h2 className="md:hidden  m-none font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>

					<p className="font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite max-w-[300px]">
						{/* {discription} */}
					</p>
					<div className=" inline-block md:h-full flex flex-col md:justify-end">
						<a className=" mt-2 md:mt-0 block w-[190px] md:w-[130px] flex flex-row  items-center text-white font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite cursor-pointer ">
							Full article
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
export default BlogCard;
