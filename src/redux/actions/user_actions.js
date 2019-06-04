import { storageKeys } from '../reducer';
import { getData, storeData } from './action';

/**
 * Updates the Inventory section in the store with the requested data.
 * @param data {Object}
 */
function updateStore(data) {
	const attachInventory = {
		[storageKeys.Inventory]: data
	};
	storeData(attachInventory);
}

/**
 * Requests the user's inventory from the server and stores it in the redux store under the Inventory key
 * @returns {void}
 */
export function requestUserInventory() {
	const mockBackendData = {
		items: [
			{
				id: 'revolvingTube',
				name: 'Hula Hoop',
				entertainmentValue: 10,
			},
			{
				id: 'spinningDiskSuspension',
				name: 'Yoyo',
				entertainmentValue: 51,
			},
		],
		numOfItems: 2,
	};
	updateStore(mockBackendData);
}

/**
 * Sends a request to add an item to the user's inventory.
 */
export function addItem() {
	const currentItems = getData(storageKeys.Inventory).items.slice();
	currentItems.push(getRandomItem());
}

function getRandomItem() {
	const rand = Math.floor(Math.random() * Math.floor(mockItems.length));
	return mockItems[rand];
}

const mockItems = [
	{
		id: 'miniLocomotive',
		name: 'Toy Train',
		entertainmentValue: 23,
	},
	{
		id: 'centrifuge',
		name: 'Fidget Spinner',
		entertainmentValue: 87,
	},
	{
		id: 'perpetualMotionMachine',
		name: 'Jacob\'s Ladder',
		entertainmentValue: 15,
	},
	{
		id: 'primitiveVideoGame',
		name: 'Board Game',
		entertainmentValue: 23,
	},
	{
		id: 'hardPiano',
		name: 'Xylophone',
		entertainmentValue: 71,
	},
	{
		id: 'deliciousClay',
		name: 'Playdough',
		entertainmentValue: 53,
	},
];


