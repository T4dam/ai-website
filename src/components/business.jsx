import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './button';

const Business = () => {
	return (
		<section id="features" className={layout.section}>
			<div className={layout.sectionInfo}>
				<h2 className={styles.heading2}>
					Some kick ass title <br className="hidden sm:block" />
					to rock the world
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
                {features.map((item, index) =>(
                    
                ))}
            </div>
		</section>
	);
};

export default Business;
