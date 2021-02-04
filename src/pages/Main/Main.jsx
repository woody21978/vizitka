import React from 'react';
import './Main.scss';
// Компоненты
import Section from '../../components/Section/Section';
import Dropdown from '../../components/Dropdown/Dropdown';
import User from '../../components/User/User';
import MediaCardsContainer from '../../containers/MediaCardsContainer';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';

function Main() {
	return (
		<main>
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

export default Main;
