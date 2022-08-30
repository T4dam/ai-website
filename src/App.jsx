import React from 'react';
import styles from './style';
import {
	Bee,
	FeedbackCard,
	About,
	HeavyCargo,
	Clients,
	Hero,
	Stats,
	Navbar,
	Footer,
	CTA,
	GetStarted,
	Testimonials,
	Featured,
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
				{/* <Stats /> */}
				<About />
				<Bee />
				<HeavyCargo />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
				{/* 
				<FeedbackCard />
				<GetStarted />
       */}
			</div>
		</div>
	</div>
);

export default App;
