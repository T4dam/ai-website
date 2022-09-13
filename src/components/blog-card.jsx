import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
// import { logo } from './../assets';
import { motion } from 'framer-motion';
import logo from './../assets/logo.svg';
// import { GrFormNext } from 'react-icons/gr';
import styles from '../style';

const BlogCard = ({ id, title, img }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [30, -30]);
	const rotateY = useTransform(x, [-100, 100], [-30, 30]);

	return (
		<div className="w-100 perspetive flex items-center justify-center transform hover:scale-105 lg:hover:scale-110 transition ease-out duration-300 hover:border rounded-[24px] hover:border-[#00F6FF] ">
			<motion.div
				// drag
				// whileTap={{ cursor: 'grabbing' }}
				// dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
				className=" w-full mg:w-[285px] lg:w-[320px] ll:w-[340px] h-auto ss:h-[265px] mg:h-[500px] flex flex-1 flex-col ss:flex-row mg:flex-col rounded-[25px] shadow-lg cards relative cursor-pointer overflow-hidden"
			>
				<div className="w-full flex flex-col flex-1  relative items-center justify-start">
					<div className="w-full h-[285px] flex items-start justify-start relative overflow-hidden">
						<img src={img} alt="" unselectable="on" className=" object-fill" />
					</div>
				</div>
				<div className="flex  flex-1  w-full h-full flex-col justify-center gap-2  px-[1em] md:pb-[3em] py-[20px]">
					<h2 className="hidden md:block m-none mt-3 font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>
					<h2 className="md:hidden  m-none font-semibold text-2xl font-bold text-white z-[10] font-poppins ">
						{title}
					</h2>

					<p className="font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite max-w-[300px]">
						{/* {discription} */}
					</p>
					<div className=" inline-block md:h-full flex flex-col ">
						<a className=" mt-2 mg:mt-0 block flex flex-row  items-center text-white font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite cursor-pointer ">
							Full article
							<div className=" inline-block flex justify-center items-center ml-2 w-[20px] h-[20px] bg-[#00F6FF]  rounded-[50%]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-3 h-3 text-slate-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 4.5l7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
export default BlogCard;
