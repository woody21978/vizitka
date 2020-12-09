import React from 'react-dom';
import './MediaCard.scss';

function MediaCard(props) {
	return (
		<div className="media-card">
			<p className="media-card__title">{props.data.title}</p>
			<p className="media-card__desc">{props.data.desc}</p>
			<div className="media-card__footer">
				<div className="media-card__date">{props.data.date}</div>
				<p className="media-card__readmore">Читать</p>
			</div>
		</div>
	);
}

export default MediaCard;
