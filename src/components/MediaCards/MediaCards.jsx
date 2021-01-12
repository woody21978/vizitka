import React from 'react-dom';
import './MediaCards.scss';
import state from '../../store';
// Компоненты
import MediaCard from '../MediaCard/MediaCard';

function MediaCards() {
	return (
		<div className="media-cards">
			{state.media.length > 0 ? (
				state.media.map((item, index) => {
					// console.log()
					return <MediaCard key={item.id} data={item} />;
				})
			) : (
				<span>123</span>
			)}
		</div>
	);
}

export default MediaCards;
