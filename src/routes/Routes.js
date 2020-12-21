import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Компоненты
import Main from '../pages/Main/Main';
import Smi from '../pages/Smi/Smi';
import Product from '../pages/Product/Product';

function Router() {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/smi" component={Smi} />
			<Route path="/product" component={Product} />
		</Switch>
	);
}

export default Router;
