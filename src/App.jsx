import React from 'react';
import styles from './style';
import {
	Bee,
	About,
	HeavyCargo,
	Hero,
	Navbar,
	Footer,
	CTA,
	Testimonials,
	Featured,
	HowItWorksSection,
	Testi,
} from './components';

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>
		<div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Featured />
				<Testi />
				<HowItWorksSection />
				<About />
				<Bee />
				<HeavyCargo />
				{/* <Testimonials /> */}
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
