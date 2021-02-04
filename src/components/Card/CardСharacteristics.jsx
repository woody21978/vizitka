import React from 'react';

const CardСharacteristics = ({ data }) => {
	return (
		<div className="card-characteristics">
			{data.map((item) => {
				return (
					<p className="card-characteristics__name">
						{item.name}:{' '}
						<span className="card-characteristics__value">{item.value}</span>
					</p>
				);
			})}
		</div>
	);
};

export default CardСharacteristics;
