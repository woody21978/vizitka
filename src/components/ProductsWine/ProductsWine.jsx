import React from 'react';
import './ProductsWine.scss';
// Компоненты
import '../ProductWine/ProductWine';
import ProductWine from '../ProductWine/ProductWine';
import Button from '../Button/Button';

function ProductsWine({ products, action, visibleButton }) {
	return (
		<div className="products-wrapper">
			<div className="products-wine">
				{products.map((items) => (
					<ProductWine key={items.id} product={items} />
				))}
			</div>
			{visibleButton && (
				<Button
					size="lg"
					type="transparent"
					classes=""
					text="Показать больше"
					action={action}
				/>
			)}
		</div>
	);
}

export default ProductsWine;
