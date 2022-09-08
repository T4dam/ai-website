import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { feedback } from '../constants';
import { ImQuotesRight } from 'react-icons/im';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';

export default function App() {
	return (
		<>
			<Swiper
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				slidesPerView={1}
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
				modules={[Pagination]}
				className="mySwiper"
			>
				{feedback.map((item) => {
					return (
						<SwiperSlide>
							<div
								key={item.id}
								className="h-[340px] bg-black-gradient mt-2 bg-blue-200 rounded-2xl"
							>
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
										<ImQuotesRight
											style={{ color: '#5ce1e6', fontSize: '40px' }}
										/>
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
		</>
	);
}
