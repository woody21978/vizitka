import React from 'react';
import './Section.scss';

function Section({ title, subtitle, dropdown, classes, content }) {
	return (
		<section className={`section ${classes}`}>
			<div className="container">
				<div className="section-header">
					{title && <p className="section__title">{title}</p>}
					{dropdown && dropdown}
				</div>

				<div className="section__content">{content}</div>
			</div>
		</section>
	);
}

export default Section;
