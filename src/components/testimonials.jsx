import { Swiper, SwiperSlide } from 'swiper/react';
import { feedback } from '../constants';
import { Autoplay } from 'swiper';
import styles from '../style';
import { quotes } from '../assets';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const Testimonials = () => {
	return (
		<section id="clients" className={`${styles.paddingY}  flex-col relative `}>
			<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
				<h2 className={styles.heading2}>
					Changing the world
					<br className="hidden sm:block" />
					requires your support
				</h2>
				<div className="w-full md:mt-0 mt-6 flex justify-end">
					<p className={`${styles.paragraph} text-left max-w-[470px]`}>
						The most powerful drones humanity will ever need is created by our
						loyal supporters.
					</p>
				</div>
			</div>
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				spaceBetween={10}
				grabCursor={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1250: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{feedback.map((item) => {
					return (
						<SwiperSlide key={item.id}>
							<div className="h-[340px] bg-black-gradient mt-2 bg-blue-200 rounded-2xl">
								<div className="mx-[40px]">
									<div className="w-[100px] h-[100px] mt-[-48px] mx-auto">
										<div className="p-1 bg-black-gradient rounded-full">
											<img src={item.img} className="m-auto rounded-full" />
										</div>
									</div>
									<div className="flex justify-between items-center">
										<div>
											<h3 className="font-poppins font-semibold text-[20px] leading-[32px] text-white dark:text-white mt-5 text-base font-medium tracking-tight">
												{item.name}
											</h3>
											<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
												{item.title}
											</p>
										</div>

										<img src={quotes} alt="" className="w-[50px] h-[50px]" />
										{/* <ImQuotesRight
											style={{ color: '#5ce1e6', fontSize: '40px' }}
										/> */}
									</div>
									<p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10 dark:text-slate-400 mt-4 ">
										{item.content}
									</p>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};
export default Testimonials;
