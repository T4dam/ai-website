// import { apple, google, drone1 } from '../assets';
import styles, { layout } from '../style';
import Button from './button';
// import { drone1 } from './../../public/drone1.png';

const Bee = () => {
	return (
		<section
			id="product"
			className={`${layout.sectionReverse} md:justify-center md:items-center gap-5`}
		>
			<div
				className={` ${layout.sectionImgReverse} box h-full w-full relative`}
			>
				{/* <img
					src={drone1}
					alt="drone"
					className="w-full h-full z-[5] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-500/50 rounded-xl object-cover"
				/> */}

				<div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
				<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			</div>
			<div className={`${layout.sectionInfo}`}>
				<h2 className={`${styles.heading2} md:text-[38px] mg:text-[40px] `}>
					This friendly bee
					<br className="hidden sm:block" />
					will fit through <br className="hidden sm:block" />
					smallest of cracks
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
