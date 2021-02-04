import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './css/base.scss';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu/Menu';

// Роутинг
import Router from './routes/Routes';

ReactDOM.render(
	<BrowserRouter>
		<Menu />

		{/* <App /> */}
		<Router />
	</BrowserRouter>,
	document.getElementById('root')
);
