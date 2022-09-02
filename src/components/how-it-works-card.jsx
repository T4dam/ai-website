// import { quotes } from './../assets';
import { motion } from 'framer-motion';
import styles from '../style';
const HowItWorks = ({ id, title, icon, discription }) => {
	console.log(title);
	return (
		<div
			key={id}
			className="w-[270px] flex flex-col justify-between px-10 py-12 cards max-w-[370px]  rounded-[20px] relative"
		>
			<div
				className={`w-[44px] h-[44px] rounded-full ${styles.flexCenter} bg-dimBlue absolute top-2 left-2`}
			>
				<motion.div
					whileHover={{
						position: 'relative',
						zIndex: 1,
						scale: [1, 1.4, 1.2],
						rotate: [0, 10, -10, 0],
						transition: {
							duration: 0.2,
						},
					}}
					className={`${styles.flexCenter}`}
				>
					<img src="" alt="" className="w-[50%] h-[50%] object-contain" />
				</motion.div>
			</div>

			<div className="flex flex-row">
				<div className="flex flex-col ml-4">
					<h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
						{title}
					</h4>
					<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
						{discription}
					</p>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
