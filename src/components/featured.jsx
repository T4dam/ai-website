import { featured } from '../constants';
import styles from '../style';

const Featured = () => {
	return (
		<section className={`${styles.flexCenter} my-5`}>
			<div className={`${styles.flexCenter} flex-1 flex-wrap w-full`}>
				<p className={`${styles.paragraph}`}>Featured in:</p>
				{featured.map((item, index) => {
					return (
						<div
							key={item.id}
							className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
						>
							<img
								src={item.logo}
								alt="logo"
								width={100}
								hight={50}
								className={`sm:w-[192px] w-[100px] object-contain ${
									index === featured.length - 1
										? 'sm:w-[140px]'
										: 'sm:w-[192px]'
								}`}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Featured;
