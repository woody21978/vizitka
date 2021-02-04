import React from 'react';
import './index.scss';

const CardDomainHeader = ({ name }) => {
	return (
		<div className="card__photo card__photo--bg">
			<p className="card__title">{name}</p>
		</div>
	);
};

export default CardDomainHeader;
