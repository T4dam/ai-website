import { apple, bill, google, drone1 } from '../assets';
import styles, { layout } from '../style';
import Button from './button';
// import { drone1 } from './../../public/drone1.png';

const Bee = () => {
	return (
		<section className={`${layout.sectionReverse}`}>
			<div className={layout.sectionImgReverse}>
				<img
					src={drone1}
					alt="bills"
					className="w-full h-full relative z-[5] rounded-xl"
				/>

				<div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			</div>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={styles.heading2}>
					This friendly <br className="hidden sm:block" />
					bee will fit through any crack
				</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed magni
					alias tenetur accusantium voluptatum inventore quo rem dolores rerum?
					Debitis.
				</p>
				<Button styles="mt-10" text="Buy now" />
			</div>
		</section>
	);
};

export default Bee;
