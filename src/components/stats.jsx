import React from 'react';
import styles from './../style';
import { stats } from '../constants';

const Stats = () => {
	return (
		<section
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
		>
			{stats.map((stat) => (
				<div
					className="flex-1 flex flex-row justify-center items-center gap-3 m-3"
					key={stat.id}
				>
					<h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white ">
						{stat.value}
					</h4>
					<p className="font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white uppercase text-gradient">
						{stat.title}
					</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
