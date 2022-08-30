import React from 'react';
import Button from './button';
import { card, drone2 } from '../assets';
import styles, { layout } from '../style';

const HeavyCargo = () => {
	return (
		<section className={`${layout.section}`}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Long endurance <br className="hidden sm:block" />
					tactical drone
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eaque
					culpa magni assumenda asperiores cupiditate aliquam inventore iste
					consequuntur nemo?
				</p>
				<Button styles={'mt-10'} text={'Preorder'} />
			</div>
			<div className={layout.sectionImg}>
				<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
				<img src={drone2} alt="drone" className="rounded-xl" />
			</div>
		</section>
	);
};

export default HeavyCargo;
