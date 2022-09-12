import React from 'react';
import styles from '../style';
import { apple, google } from './../assets/index';
import './..//scss/index.scss';

// import { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// // import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
// import { Model } from './model';
// import {
// 	PresentationControls,
// 	Environment,
// 	ContactShadows,
// } from '@react-three/drei';

const Hero = () => {
	return (
		<section
			id="home"
			className={`flex flex-col md:flex-row ${styles.paddingY} w-auto h-[955px] md:h-full`}
		>
			<div
				className={`flex-1 ${styles.flexStart} md:pl-32 md:pr-0 sd:px-32 sm:px-16 px-6 flex-col `}
			>
				<div className="flex flex-row  items-center gap-4">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] xs:leading-[75px] leading-[60px]">
						New AI
						<br className="hidden sm:block" />{' '}
						<span className="brightness-110 ss:text-[72px] text-[52px]">
							Powered
						</span>
					</h1>
				</div>

				<h1 className="block font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] xs:leading-[75px] leading-[60px]">
					Smart Drones
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa
					consectetur, dolorem aliquam sunt provident qui deserunt.
				</p>
				<div className="flex flex-row flex-wrap items-center py-[12px] px-4 bg-discount-gradient rounded-[10px] mb-2 gap-4 mt-4">
					<img
						src={apple}
						alt=""
						className="w-[120] h-[39] xs:w-[120px] xs:h-[39px] "
					/>
					<img
						src={google}
						alt=""
						className="w-[120] h-[39] xs:w-[120px] xs:h-[39px]"
					/>
				</div>
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 relative w-auto h-[555px] md:pr-16`}
			>
				{/* <Canvas className="z-[99]">
					<ambientLight intensity={0.5} />
					<PresentationControls
						global
						config={{ mass: 2, tension: 500 }}
						snap={{ mass: 4, tension: 1500 }}
						rotation={[0, 0.3, 0]}
						polar={[-Math.PI / 3, Math.PI / 3]}
						azimuth={[-Math.PI / 1.4, Math.PI / 2]}
					>
						<Suspense fallback={null}>
							<Model />
						</Suspense>
					</PresentationControls>
					<ContactShadows
						position={[0, -1.4, 0]}
						opacity={0.75}
						scale={10}
						blur={2.5}
						far={4}
					/>
					<Environment preset="city" />
				</Canvas> */}

				{/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
				<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div> */}
			</div>
			<div className={`ss:hidden ${styles.flexCenter}`}></div>
		</section>
	);
};

export default Hero;
