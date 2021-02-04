import React from 'react';
import './ProductsWine.scss';
// Компоненты
import '../ProductWine/ProductWine';
import ProductWine from '../ProductWine/ProductWine';
import Button from '../Button/Button';

const ProductsWine = ({ products, action, visibleButton }) => {
	return (
		<div className="products-wrapper">
			<div className="products-wine">
				{products.map((items, index) => (
					<ProductWine key={index} product={items} />
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
};

export default ProductsWine;
