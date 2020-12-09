import React from 'react';
import './Main.scss';
// Компоненты
import Menu from '../../components/Header/Menu/Menu';
import SectionUser from './components/SectionUser/SectionUser';
import SectionSmi from './components/SectionSmi/SectionSmi';
import Dropdown from '../../components/Dropdown/Dropdown';

function Main() {
	return (
		<>
			<Menu />
			<SectionUser />
			<SectionSmi />
		</>
	);
}

export default Main;
