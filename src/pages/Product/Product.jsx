import React from 'react';
// Компоненты
import Section from '../../components/Section/Section';
import Dropdown from '../../components/Dropdown/Dropdown';
import ProductsWineContainer from '../../containers/ProductsWineContainer/index';
import SortingPanel from '../../components/SortingPanel/SortingPanel';

function Product({ product }) {
	// const { img, title, subtitle, price, rating, characterizationObj } = product;
	console.log(product);
	return (
		<main className="bg-main">
			<Section
				title="Российское вино"
				dropdown={<Dropdown />}
				content={<ProductsWineContainer />}
			/>
			<SortingPanel />
		</main>
	);
}

export default Product;
