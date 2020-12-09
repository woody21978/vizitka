import React from 'react';
import './SectionSmi.scss';
// Компоненты
import Dropdown from '../../../../components/Dropdown/Dropdown';
import MediaCards from '../MediaCards/MediaCards';

function SectionSmi() {
	return (
		<section className="section section--smi bg-main">
			<div className="container">
				<div className="section-header">
					<p className="section__title">Информация в СМИ</p>
					<Dropdown />
				</div>
				<div className="section__content">
					<MediaCards />
				</div>
			</div>
		</section>
	);
}

export default SectionSmi;
