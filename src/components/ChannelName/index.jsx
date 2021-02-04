import React from 'react';
import './index.scss';

const ChannelName = ({ name, pin }) => {
	return (
		<div className="card-name">
			<div className="card-name-item">
				<img
					src="../../images/icons/social/youtube.svg"
					alt=""
					className="card-name__icon"
				/>
				<p className="card-name__title">{name}</p>
			</div>
			{pin && <img src="/images/icons/pin.svg" alt="" />}
		</div>
	);
};

export default ChannelName;
