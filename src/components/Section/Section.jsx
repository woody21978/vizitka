import React from 'react';
import './Section.scss';

const Section = ({ title, subtitle, dropdown, classes, content }) => {
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
};

Section.defaultProps = { classes: '123' };
export default Section;
