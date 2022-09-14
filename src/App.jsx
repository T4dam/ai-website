import React, { Suspense, lazy } from 'react';
import styles from './style';
import {
	// Bee,
	// About,
	// HeavyCargo,
	Hero,
	Navbar,
	// Footer,
	// Testimonials,
	// Featured,
	// HowItWorksSection,
	// Blog,
	// SignUp,
} from './components';

const Featured = lazy(() => import('./components/featured'));
const HowItWorksSection = lazy(() =>
	import('./components/how-it-works-section'),
);
const About = lazy(() => import('./components/about'));
const Bee = lazy(() => import('./components/bee'));
const HeavyCargo = lazy(() => import('./components/heavy-cargo'));
const Testimonials = lazy(() => import('./components/testimonials'));
const SignUp = lazy(() => import('./components/signup'));
const Blog = lazy(() => import('./components/blog'));
const Footer = lazy(() => import('./components/footer'));

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={` bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>
		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Suspense fallback={null}>
					<Featured />
				</Suspense>
				<Suspense fallback={null}>
					<HowItWorksSection />
				</Suspense>
				<Suspense fallback={null}>
					<About />
				</Suspense>
				<Suspense fallback={null}>
					<Bee />
				</Suspense>
				<Suspense fallback={null}>
					<HeavyCargo />
				</Suspense>
				<Suspense fallback={null}>
					<Testimonials />
				</Suspense>
				<Suspense fallback={null}>
					<SignUp />
				</Suspense>
				<Suspense fallback={null}>
					<Blog />
				</Suspense>
				<Suspense fallback={null}>
					<Footer />
				</Suspense>
			</div>
		</div>
	</div>
);

export default App;
