import React from 'react';
import state from '../../store';
import MediaCards from '../../components/MediaCards/MediaCards';
import MediaCard from '../../components/MediaCard/MediaCard';

const MediaCardsContainer = () => {
	const cardsRender = (data) => {
		if (data.length > 0) {
			return (
				<MediaCards>
					{data.map((card) => {
						return <MediaCard key={card.id} data={card} />;
					})}
				</MediaCards>
			);
		}
		return <span>Данных нет</span>;
	};

	return cardsRender(state.media);
};

export default MediaCardsContainer;
