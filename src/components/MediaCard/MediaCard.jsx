import React from 'react-dom';
import './MediaCard.scss';

const MediaCard = ({ data }) => {
	const { title, desc, date } = data;
	return (
		<div className="media-card">
			<p className="media-card__title">{title}</p>
			<p className="media-card__desc">{desc}</p>
			<div className="media-card__footer">
				<div className="media-card__date">{date}</div>
				<p className="media-card__readmore">Читать</p>
			</div>
		</div>
	);
};

export default MediaCard;
