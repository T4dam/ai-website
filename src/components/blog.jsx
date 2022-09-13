import { news } from '../constants';
import styles from '../style';

import BlogCard from './blog-card';

const Blog = () => {
	return (
		<section
			id="articles"
			className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
		>
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={styles.heading2}>Latest articles</h2>
			</div>
			<div className=" flex flex-1 flex-col mg:flex-row xs:px-0 gap-12 md:gap-5 align-center md:justify-between w-full feedback-container relative z-[1]">
				{news.map((item) => {
					return <BlogCard key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Blog;
