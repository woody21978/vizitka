import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './NotFound.scss';
// Компоненты
import Section from '../../components/Section/Section';
import PageNotFound from '../../components/PageNotFound';

import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu';

function NotFound() {
	return (
		<main>
			{state.headerMenu.isOpen && <HeaderMenu />}

			<Section
				classes="section-smi"
				content={<PageNotFound onClick={() => {}} />}
			/>

			<Footer />
		</main>
	);
}

export default view(NotFound);
