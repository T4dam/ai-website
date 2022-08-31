import React from 'react';
import { feedback } from '../constants';
import styles from './../style';
import FeedbackCard from './feedback-card';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
	return (
		<section
			id="clients"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
		>
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={styles.heading2}>
					Changing the world
					<br className="hidden sm:block" />
					requires your support
				</h2>
				<div className="w-full md:mt-0 mt-6 flex justify-end">
					<p className={`${styles.paragraph} text-left max-w-[470px]`}>
						The most powerful drones humanity will ever need is created by our
						loyal supporters.
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
