import cloneDeep from 'lodash.clonedeep';
import merge from 'deepmerge';

export const storageKeys = {
	Inventory: 'Inventory',
};

export function generalReducer(state = defaultState, action) {
	if (action.type === 'clear') {	// Resets all redux data
		return defaultState;
	}

	let copy = cloneDeep(state);

	Object.keys(action).forEach((key) => {
		if (key === 'type') {
			return;
		}

		let subState = copy[key];
		if (!subState) {
			subState = {};
		}
		const newSubState = merge(subState, action[key], {
			arrayMerge: (destinationArray, sourceArray) => sourceArray,	// specifies that arrays should be overwritten rather than concatenated
		});
		copy[key] = newSubState;
	});

	return copy;
}

export const defaultState = {
	[storageKeys.Inventory]: {
		numOfItems: 0,
		items: [],
	},
}
