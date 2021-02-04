import React from 'react';

const CardHeaderChannel = ({ image }) => {
	return (
		<div className="card__photo card__photo--gradient">
			<img src={image} alt="" className="card__photo__img" />
		</div>
	);
};

export default CardHeaderChannel;
