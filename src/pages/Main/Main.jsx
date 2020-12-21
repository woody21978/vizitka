import React from 'react';
import './Main.scss';
// Компоненты
import Section from '../../components/Section/Section';
import Dropdown from '../../components/Dropdown/Dropdown';
// import SectionUser from '../../components/SectionUser/SectionUser';
import User from '../../components/User/User';
// import SectionSmi from '../../components/SectionSmi/SectionSmi';
import MediaCards from '../../components/MediaCards/MediaCards';
import ContactForm from '../../components/ContactForm/ContactForm';
// import SectionContact from '../../components/SectionContact/SectionContact';
import Footer from '../../components/Footer/Footer';

function Main() {
	return (
		<main>
			<Section classes="section-user" content={<User />} />
			<Section
				classes="section-smi"
				title="Информация в СМИ"
				dropdown={<Dropdown />}
				content={<MediaCards />}
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
