// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { feedback } from '../constants';
// import styles from '../style';
// import FeedbackCard from './feedback-card';
// import { ImQuotesRight } from 'react-icons/im';

// const Testimonials = () => {
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 3,
// 		slidesToScroll: 4,
// 		initialSlide: 0,

// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 2,
// 					infinite: true,
// 					dots: true,
// 				},
// 			},
// 			{
// 				breakpoint: 600,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 2,
// 					initialSlide: 2,
// 				},
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 0,
// 				},
// 			},
// 		],
// 	};
// 	return (
// 		<section
// 			id="clients"
// 			className={`${styles.paddingY} hidden xs:block flex-col relative `}
// 		>
// 			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
// 				<h2 className={styles.heading2}>
// 					Changing the world
// 					<br className="hidden sm:block" />
// 					requires your support
// 				</h2>
// 				<div className="w-full md:mt-0 mt-6 flex justify-end">
// 					<p className={`${styles.paragraph} text-left max-w-[470px]`}>
// 						The most powerful drones humanity will ever need is created by our
// 						loyal supporters.
// 					</p>
// 				</div>
// 			</div>
// 			<div className="bg-primary">
// 				<Slider {...settings}>
// 					{feedback.map((item) => {
// 						return (
// 							<div
// 								key={item.id}
// 								className="bg-black-gradient h-[380px] lg:h-[335px] dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl "
// 							>
// 								<div className="w-[100px] h-[100px] mt-[-70px] mx-auto">
// 									<div className="p-1 bg-black-gradient rounded-full">
// 										<img src={item.img} className="m-auto rounded-full" />
// 									</div>
// 								</div>
// 								<div className="flex justify-between items-center">
// 									<div>
// 										<h3 className="font-poppins font-semibold text-[20px] leading-[32px] text-white dark:text-white mt-5 text-base font-medium tracking-tight">
// 											{item.name}
// 										</h3>
// 										<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
// 											{item.title}
// 										</p>
// 									</div>
// 									<ImQuotesRight
// 										style={{ color: '#5ce1e6', fontSize: '40px' }}
// 									/>
// 								</div>
// 								<p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 dark:text-slate-400 mt-4 ">
// 									{item.content}
// 								</p>
// 							</div>
// 						);
// 					})}
// 				</Slider>
// 			</div>
// 		</section>
// 	);
// };
// export default Testimonials;
