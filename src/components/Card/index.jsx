import React from 'react';
import './index.scss';

const Card = ({ type, pin, children }) => {
	console.log('test');
	return (
		<div
			className={
				type ? `card card--${type} letter-spacing` : 'card letter-spacing'
			}>
			{children}
			{type && (
				<div className={`card-badge card-badge--${type}`}>
					<div className="card-badge__item">
						{type === 'gold' ? (
							<img
								src="../images/icons/crown.svg"
								alt=""
								className="card-badge__icon"
							/>
						) : (
							<img
								src="../images/icons/fire.svg"
								alt=""
								className="card-badge__icon"
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
