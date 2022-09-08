// // import { quotes } from './../assets';
// import { shield } from './../assets';
// import { motion } from 'framer-motion';
// import styles from '../style';
// const HowItWorks = ({ id, title, icon, discription }) => {
// 	console.log(title);
// 	return (
// 		<div
// 			key={id}
// 			className="w-min-[270px] flex flex-1 flex-col justify-between px-10 py-12 cards md:max-w-[370px]  overflow-hidden rounded-[20px] relative"
// 		>
// 			<div
// 				className={`w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlueish absolute top-4 left-4`}
// 			>
// 				<motion.div
// 					whileHover={{
// 						position: 'relative',
// 						zIndex: 1,
// 						scale: [1, 1.4, 1.2],
// 						transition: {
// 							duration: 0.2,
// 						},
// 					}}
// 					className={`${styles.flexCenter} w-[38px] h-[38px] rounded-full bg-dimWhite`}
// 				>
// 					<p className="font-semibold text-2xl">{id}</p>
// 					{/* <img src="" alt="" className="w-[50%] h-[50%] object-contain" /> */}
// 				</motion.div>
// 			</div>

// 			<div className="flex flex-col overflow-hidden ">
// 				<div className="flex flex-row">
// 					<div className="flex flex-col mt-4 ml-4">
// 						<h4 className="font-poppins font-semibold text-[24px] md:text-[20px] leading-[32px] text-white">
// 							{title}
// 						</h4>
// 						<p className="font-poppins font-normal text-[20px] md:text-[16px] leading-[24px] text-dimWhite max-w-[300px]">
// 							{discription}
// 						</p>
// 						<p className={` md:hidden mt-40 ${styles.paragraph}`}>
// 							Learn more >
// 						</p>
// 					</div>
// 					<img
// 						src={icon}
// 						alt="icon"
// 						className=" md:hidden absolute top-13 sm:right-[-150px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350x] md:w-[px] md:w-[px]"
// 					/>
// 				</div>
// 				<div className="md:mt-15 flex flex-row gap-2 justify-between items-center md:justify-center md:items-end">
// 					<p className={`hidden md:block ${styles.paragraph}`}>Learn more ></p>
// 					<img
// 						src={icon}
// 						alt="icon"
// 						className=" hidden md:block -mr-24 md:-mr-32 w-[400px] h-[400x] md:w-[px] md:w-[px]"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HowItWorks;
