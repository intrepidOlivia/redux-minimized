import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import { initializeStore } from './redux/store';
import { Provider } from 'react-redux';

const store = initializeStore();
const connectedApp = (
	<Provider
		store={store}
	>
		<App />
	</Provider>
);

ReactDOM.render(connectedApp, document.getElementById('root'));
