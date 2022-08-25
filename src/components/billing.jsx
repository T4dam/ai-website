import { apple, bill, google } from './../assets';
import styles, { layout } from '../style';

const Billing = () => {
	return (
		<section className={`${layout.sectionReverse}`}>
			<div className={layout.sectionImgReverse}>
				<img src={bill} alt="bills" className="w-full h-full relative z-[5]" />

				<div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			</div>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={styles.heading2}>
					Easily do whaterver <br className="hidden sm:block" />
					you like cuz you da man
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magni
					alias tenetur accusantium voluptatum inventore quo rem dolores rerum?
					Debitis.
				</p>
			</div>
		</section>
	);
};

export default Billing;
