import styles from '../style';
import { logo } from './../assets';
import { footerLinks, socialMedia } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className="flex-[1] flex flex-col justify-start mr-10">
					<div className="w-[266px] h-[72.14px] flex items-center gap-3">
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
							className="self-start"
						>
							<a href="#">
								<img
									src={logo}
									alt="robot"
									className="w-[106px] h-[72.14px] object-contain"
								/>
							</a>
						</motion.div>
						<p className="font-poppins font-semibold text-white mt-[5px] text-4xl">
							Aiddron
						</p>
					</div>
					<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
						consectetur!
					</p>
				</div>
				<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
					{footerLinks.map((item) => {
						return (
							<div
								key={item.title}
								className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
							>
								<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
									{item.title}
								</h4>
								<ul className="list-none mt-4">
									{item.links.map((footerlink, index) => {
										return (
											<li
												key={footerlink.name}
												className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
													index !== item.links.length - 1 ? 'mb-4' : 'mb-0'
												}`}
											>
												<a href={footerlink.link}>{footerlink.name}</a>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
				<p
					className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white`}
				>
					Copyright Aiddron 2022. All rights reserved
				</p>
				<div className="flex md:mt-0 mt-6">
					{socialMedia.map((item, index) => {
						return (
							<a
								href={item.link}
								key={item.id}
								className={`${
									index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
								} w-[21px] h-[21px] object-contain cursor-pointer`}
							>
								<img src={item.icon} alt="social media" />
							</a>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
