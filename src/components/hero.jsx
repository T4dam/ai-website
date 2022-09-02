import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './get-started';
import { apple, google } from './../assets/index';
import './..//scss/index.scss';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
import { Model } from './model';
import {
	BakeShadows,
	OrbitControls,
	useGLTF,
	PresentationControls,
	Environment,
	ContactShadows,
	Html,
	Stage,
} from '@react-three/drei';

const Hero = () => {
	return (
		<section
			id="home"
			className={`flex flex-col md:flex-row ${styles.paddingY}`}
		>
			<div className={`flex-1 ${styles.flexStart} flex-col `}>
				{/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
					<img
						src={discount}
						alt="dicount image"
						className="w-[32px] h-[32px]"
					/>
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-slate-900">20%</span> Discount for{' '}
						<span className="text-slate-900">1 Month</span> Account
					</p>
				</div> */}

				<div className="flex flex-row  items-center gap-4">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
						New AI
						<br className="hidden sm:block" />{' '}
						<span className="brightness-110 ss:text-[72px] text-[52px]">
							Powered
						</span>
					</h1>

					<div className="hidden ss:flex mr-0 md:mr-4 ">
						{/* <GetStarted /> */}
						{/* <img
							src={aiBadge}
							alt=""
							className=" object-contain h-[135px] w-[130px]"
						/> */}
					</div>
				</div>

				<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
					Smart Drones
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa
					consectetur, dolorem aliquam sunt provident qui deserunt.
				</p>
				<div className="flex flex-row items-center py-[12px] px-4 bg-discount-gradient rounded-[10px] mb-2 gap-4 mt-4">
					<img src={apple} alt="" />
					<img src={google} alt="" />
				</div>
			</div>

			<div
				className={`flex-1 flex ${styles.flexCenter} my-10 md:my-0 relative`}
			>
				<Canvas>
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
				</Canvas>

				{/* <img
					src={robot}
					alt="robot"
					className=" w-full h-full object-contain   relative z-[5]"
				/> */}
				<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
				<div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
				<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
			</div>
			<div className={`ss:hidden ${styles.flexCenter}`}>
				{/* <img
					src={aiBadge}
					alt=""
					className=" object-contain h-[135px] w-[130px]"
				/> */}
			</div>
		</section>
	);
};

export default Hero;
