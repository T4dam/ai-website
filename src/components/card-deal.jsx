import React from 'react';
import Button from './button';
import { card } from './../assets';
import styles, { layout } from '../style';

const CardDeal = () => {
	return (
		<section className={`${layout.section}`}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Some other text <br className="hidden sm:block" />
					to get you goin
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eaque
					culpa magni assumenda asperiores cupiditate aliquam inventore iste
					consequuntur nemo?
				</p>
				<Button styles={'mt-10'} text={'Start now'} />
			</div>
			<div className={layout.sectionImg}>
				<img src={card} alt="cards" />
			</div>
		</section>
	);
};

export default CardDeal;
