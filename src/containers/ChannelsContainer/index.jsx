import React from 'react';
import state from '../../store';
// import Channels from '../../components/Channels/index';
import Cards from '../../components/Cards';
import Card from '../../components/Card/index';
import CardHeaderChannel from '../../components/CardHeaderChannel';
import CardContent from '../../components/Card/CardContent';
import ChannelName from '../../components/ChannelName';
import CardDesc from '../../components/Card/CardDesc';
import CardLine from '../../components/Card/CardLine';
import CardСharacteristic from '../../components/Card/CardСharacteristics';
import CardFooter from '../../components/Card/CardFooter';

const ChannelsContainer = () => {
	const renderCards = (cards) => {
		return cards.map(
			({ id, type, image, name, pin, desc, characteristics, price }) => {
				return (
					<Card key={id} type={type}>
						<CardHeaderChannel image={image} />
						<CardContent>
							<ChannelName name={name} pin={pin} />
							<CardDesc desc={desc} />
							<CardLine />
							<CardСharacteristic data={characteristics} />
							<CardFooter price={price} />
						</CardContent>
					</Card>
				);
			}
		);
	};

	return <Cards>{renderCards(state.productChannel.channels)}</Cards>;
};

export default ChannelsContainer;
