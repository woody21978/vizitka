import React from 'react';
import state from '../../store';
// import Domains from '../../components/Domains';
import Cards from '../../components/Cards';
import Card from '../../components/Card';
import CardDomainHeader from '../../components/CardHeaderDomain';
import CardContent from '../../components/Card/CardContent';
import CardСharacteristic from '../../components/Card/CardСharacteristics';
import CardLine from '../../components/Card/CardLine';
import CardFooter from '../../components/Card/CardFooter';

const DomainsContainer = () => {
	const renderCards = (cards) => {
		return cards.map(({ id, type, name, characteristics, price }) => {
			return (
				<Card key={id} type={type}>
					<CardDomainHeader name={name} />
					<CardContent>
						<CardСharacteristic data={characteristics} />
						<CardLine />
						<CardFooter price={price} />
					</CardContent>
				</Card>
			);
		});
	};

	return <Cards>{renderCards(state.productDomain.domains)}</Cards>;
};

export default DomainsContainer;
