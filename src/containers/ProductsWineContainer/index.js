import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
// Компоненты
import '../../components/ProductsWine/ProductsWine';
import ProductsWine from '../../components/ProductsWine/ProductsWine';
// Action
import getProduct from '../../action/getProduct';

function ProductsWineContainer() {
	if (state.productWine.wines.length > 0) {
		const maxProduct = state.productWine.wines.length;
		const products = [];
		let visibleButton = null;
		if (state.productWine.offset >= maxProduct) {
			state.productWine.offset = 10;
			visibleButton = false;
			for (let i = 0; i < maxProduct; i++) {
				products.push(state.productWine.wines[i]);
			}
		} else {
			visibleButton = true;
			for (let i = 0; i < state.productWine.offset; i++) {
				products.push(state.productWine.wines[i]);
			}
		}
		return (
			<ProductsWine
				products={products}
				action={getProduct}
				visibleButton={visibleButton}
			/>
		);
	} else {
		return <p>Продуктов пока что нет</p>;
	}
}

export default view(ProductsWineContainer);
