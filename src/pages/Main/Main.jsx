import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Main.scss';
// Компоненты
import Section from '../../components/Section/Section';
import Dropdown from '../../components/Dropdown/Dropdown';
import User from '../../components/User/User';
import MediaCardsContainer from '../../containers/MediaCardsContainer';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import HeaderMenu from '../../components/HeaderMenu';

function Main() {
	return (
		<main>
			{state.headerMenu.isOpen && <HeaderMenu />}
			<Section classes="section-user" content={<User />} />
			<Section
				classes="section-smi"
				title="Информация в СМИ"
				dropdown={<Dropdown />}
				content={<MediaCardsContainer />}
			/>
			<Section
				classes="section-contact"
				title="Контакты"
				content={<ContactForm />}
			/>
			<Footer />
		</main>
	);
}

export default view(Main);
