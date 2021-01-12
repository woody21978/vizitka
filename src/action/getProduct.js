import state from '../store';
function getProduct() {
	console.log(state.productWine.count);
	return (state.productWine.offset += 4);
}

export default getProduct;
