import React from 'react';
import styles from './style';
import {
	Billing,
	FeedbackCard,
	Business,
	CardDeal,
	Clients,
	Hero,
	Stats,
	Navbar,
	Footer,
	CTA,
	GetStarted,
	Testimonials,
} from './components';

const App = () => (
	<>
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>
		</div>
		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Billing />
				<FeedbackCard />
				<Business />
				<CardDeal />
				<Clients />
				<Stats />
				<Footer />
				<CTA />
				<GetStarted />
				<Testimonials />
			</div>
		</div>
	</>
);

export default App;
