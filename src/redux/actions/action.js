import { getStore } from "../store";

/**
 * Dispatches the provided item to be stored in the Redux state.
 * @param {Object} item Data to be stored in Redux. The keys of this object are the top-level headings for the redux store
 * @returns {void}
 */
export function storeData(item) {
	item.type = 'action';	// a type must be included in order for Redux to work
	getStore().dispatch(item);
}

/**
 * Clears all data in the redux store.
 * @returns {void}
 */
export function clearData() {
	getStore().dispatch({
		type: 'clear',
	});
}

/**
 * Gets the current State of the Redux Store for the key provided.
 * @param {String} key Data to be retrieved from the Redux Store. The key is on the top-level headings for the Redux store.
 * @returns {Object} The current state of the Redux Store for the specified key
 */
export function getData(key) {
	return getStore().getState()[key];
}
