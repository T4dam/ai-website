import React from 'react';
import Button from './button';
import { drone2min } from '../assets';
import styles, { layout } from '../style';

const HeavyCargo = () => {
	return (
		<section
			className={`${layout.section} md:justify-center md:items-center gap-4`}
		>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2} md:text-[38px] mg:text-[40px]`}>
					Cross continental <br className="hidden sm:block" />
					flights with our new <br className="hidden sm:block" />
					tactical drone
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eaque
					culpa magni assumenda asperiores cupiditate aliquam inventore iste
					consequuntur nemo?
				</p>
				<Button styles={'mt-10'} text={'Preorder'} />
			</div>
			<div className={`box ${layout.sectionImg}`}>
				<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
				<img
					src={drone2min}
					alt="drone"
					className="w-full h-full relative z-[5] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 rounded-xl obejct-cover"
				/>
			</div>
		</section>
	);
};

export default HeavyCargo;
