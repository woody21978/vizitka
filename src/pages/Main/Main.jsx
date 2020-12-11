import React from 'react';
import './Main.scss';
// Компоненты
import Menu from '../../components/Header/Menu/Menu';
import SectionUser from './components/SectionUser/SectionUser';
import SectionSmi from './components/SectionSmi/SectionSmi';
import SectionContact from './components/SectionContact/SectionContact';
import Footer from '../../components/Footer/Footer';

function Main() {
	return (
		<>
			<Menu />
			<SectionUser />
			<SectionSmi />
			<SectionContact />
			<Footer />
		</>
	);
}

export default Main;
