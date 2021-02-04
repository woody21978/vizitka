import React from 'react';
import Button from '../Button/Button';

const CardFooter = ({ price }) => {
	return (
		<div className="card__footer">
			<p className="card__price">
				{price}
				<span className="card__price__valute">₽</span>
			</p>
			<Button type="gold" text="Купить" size="xs" />
		</div>
	);
};

export default CardFooter;
