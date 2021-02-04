import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import Swiper from '../../components/Swiper/Swiper';

const SwiperContainer = () => {
	return (
		<Swiper data={state.swiper.slides} background={state.swiper.background} />
	);
};

export default view(SwiperContainer);
