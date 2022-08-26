import React from 'react';
import { feedback } from '../constants';
import styles from './../style';
import FeedbackCard from './feedback-card';

const Testimonials = () => {
	return (
		<section
			id="clients"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
		>
			<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={styles.heading2}>
					Kazkoks pavadinimas
					<br className="hidden sm:block" />
					nes nu reik
				</h2>
				<div className="w-full md:mt-0 mt-6 flex justify-end">
					<p className={`${styles.paragraph} text-left max-w-[470px]`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						voluptate assumenda.
					</p>
				</div>
			</div>
			<div className=" flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
				{feedback.map((item) => {
					return <FeedbackCard key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Testimonials;
