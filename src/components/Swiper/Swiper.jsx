import React from 'react';
import './Swiper.scss';
import Button from '../Button/Button';
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.scss';

function SwiperSlider({ data, background }) {
	const params = {
		spaceBetween: 30,
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 7000,
		},
	};
	const slides = [];
	data.forEach((item) => slides.push(item));
	SwiperCore.use([Autoplay]);
	return (
		<div className="slider">
			<div className="container">
				<Swiper {...params}>
					{slides.map((item) => {
						return (
							<SwiperSlide>
								<div className="slider__content">
									<h3 className="slider__title">{item.title}</h3>
									<p className="slider__desc">{item.desc}</p>
									<Button type="gold" size="slide" text="Подробнее" />
									<div className="test"></div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default SwiperSlider;
