import { storageKeys } from '../reducer';
import { storeData } from './action';

/**
 * Requests the user's inventory from the server and stores it in the redux store under the Inventory key
 * @returns {void}
 */
export function requestUserInventory() {
	const mockBackendData = {
		items: [
			{
				id: 'riker',
				name: 'Commander Riker',
				combatValue: 10,
			},
			{
				id: 'shepard',
				name: 'Commander Shepard',
				combatValue: '51',
			},
		],
		numOfItems: 2,
	};
	updateStore(mockBackendData);
}

function updateStore(data) {
	const attachInventory = {
		[storageKeys.Inventory]: data
	};
	storeData(attachInventory);
}
