import React from 'react';
// Компоненты
import Section from '../../components/Section/Section';
import SwiperContainer from '../../containers/SwiperContainer';
import Dropdown from '../../components/Dropdown/Dropdown';
// import ProductsWineContainer from '../../containers/ProductsWineContainer';
import Footer from '../../components/Footer/Footer';
// import SortingPanel from '../../components/SortingPanel/SortingPanel';
// import Card from '../../components/Card';
// import ChannelsContainer from '../../containers/ChannelsContainer';
import DomainsContainer from '../../containers/DomainsContainer';

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
							<DomainsContainer />
							{/* <SortingPanel /> */}
							{/* <ProductsWineContainer /> */}
						</>
					}
				/>
			</main>
			<Footer />
		</>
	);
}

export default Product;
