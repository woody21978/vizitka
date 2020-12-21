import React from 'react';
import './ProductsWine';
// Компоненты
import '../ProductWine/ProductWine';
import ProductWine from '../ProductWine/ProductWine';
function ProductsWine({ products }) {
	// const { img, title, subtitle, price, rating, characterizationObj } = products;
	return (
		<>
			{products.map((items) => {
				<ProductWine product={items} />;
			})}
		</>
	);

	// console.log(products[0].img);
	// return <div className="products-wine"></div>;
}

export default ProductsWine;
