import styles from './../style';
import Button from './button';
const CTA = () => {
	return (
		<section
			className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
		>
			<div className={`flex-1 flex flex-col`}>
				<h4 className={`${styles.heading2} mt-5 sm:mt-3 ml-3`}>
					Start using Aiddron today
				</h4>
				<p className={`${styles.paragraph} max-w-[470px] mt-5 ml-3`}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae hic
					aliquam similique
				</p>
			</div>
			<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
				<Button styles={'m-4'} text={'Get Started'} />
			</div>
		</section>
	);
};

export default CTA;
