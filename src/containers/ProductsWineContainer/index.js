import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
// Компоненты
import '../../components/ProductsWine/ProductsWine';
import ProductsWine from '../../components/ProductsWine/ProductsWine';

function ProductsWineContainer() {
	// console.log(state.wines[])
	return <ProductsWine products={state.wines} />;
}

export default view(ProductsWineContainer);
