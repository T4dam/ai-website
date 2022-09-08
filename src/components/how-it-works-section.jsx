import React from 'react';
import { howItWorks } from '../constants';
// import { feedback } from '../constants';
import styles from '../style';
import { HowItWorksCard } from '.';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

const HowItWorksSection = () => {
	return (
		<section
			id="howitworks"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
		>
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={styles.heading2}>How it works</h2>
				<div className="w-full md:mt-0 mt-6 flex justify-end">
					<p className={`${styles.paragraph} text-left max-w-[470px]`}>
						Three simple steps to get you off the ground
					</p>
				</div>
			</div>
			<div className=" flex flex-1 flex-col md:flex-row px-[25px] xs:px-0 gap-12 md:gap-5 align-center md:justify-between w-full feedback-container relative z-[1]">
				{howItWorks.map((item) => {
					return <HowItWorksCard key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default HowItWorksSection;
