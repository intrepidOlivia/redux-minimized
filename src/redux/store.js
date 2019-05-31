/**
 * Provides a Redux store to be used by the application.
 * After it is initialized, the store can be retrieved by the exported getStore() function,
 * and dispatch may be accessed directly from that.
 */

import { createStore } from 'redux';
import { generalReducer } from './reducer';

let store = null;

export function initializeStore() {
	store = createStore(generalReducer, undefined, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	return store;
}

export function getStore() {
	return store;
}
