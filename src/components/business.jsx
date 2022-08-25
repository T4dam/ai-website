import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './button';

const FeatureCards = ({ title, content, icon, index }) => {
	return (
		<div
			className={`flex flex-row p-6 rounded-[20px] ${
				index !== features.length - 1 ? 'mb-6' : 'mb-0'
			} feature-card`}
		>
			<div
				className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
			>
				<img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
			</div>
			<div className="flex flex-1 flex-col ml-3 justify-center">
				<h4 className=" leading-[23px] font-semibold text-white text-[18px] font-poppins">
					{title}
				</h4>
				<p className="leading-[23px] font-normal text-dimWhite text-[16px] font-poppins">
					{content}
				</p>
			</div>
		</div>
	);
};

const Business = () => {
	return (
		<section id="features" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Some kick ass title <br className="hidden sm:block" />
					to rock your shoes
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores
					quisquam explicabo, soluta illo, obcaecati ratione pariatur amet
					culpa, asperiores nulla? Tempora quisquam eius totam vero iste quos
					provident mollitia.
				</p>
				<Button styles="mt-10" text="Get started" />
			</div>
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((item, index) => (
					<FeatureCards key={item.id} {...item} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;
