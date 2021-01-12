import React from 'react';
// Компоненты
import Section from '../../components/Section/Section';
import SwiperContainer from '../../containers/SwiperContainer/SwiperContainer';
import Dropdown from '../../components/Dropdown/Dropdown';
import ProductsWineContainer from '../../containers/ProductsWineContainer/index';
import Footer from '../../components/Footer/Footer';
import SortingPanel from '../../components/SortingPanel/SortingPanel';

function Product() {
	return (
		<>
			<SwiperContainer />
			<main className="bg-main">
				<Section
					title="Российское вино"
					dropdown={<Dropdown />}
					content={
						<>
							<SortingPanel />
							<ProductsWineContainer />
						</>
					}
				/>
			</main>
			<Footer />
		</>
	);
}

export default Product;
