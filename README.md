# redux-minimized
An alternative model for an implementation of redux that minimizes the boilerplate but retains redux's full feature set.

## Getting Started

From the root directory, run `npm install` to install dependencies.

Run the example app by [insert command here]

## Usage

When writing functions for using the redux store, the most useful items to you will be:

**For writing data**: the `storeData` function from action.js and the `storageKeys` constant from reducer.js

**For reading data**: the `getStore` function from store.js.

### Writing data

```
import { storeData } from './action';
import { storageKeys } from '../reducer';
```

The `storageKeys` constant defines which headings are currently being used in the Redux store. Although it is advised to use storage keys that are predefined, it is possible to dispatch storage data under a custom key.

**Note:** The key `type` is unavailable for this purpose and will be overwritten by internal dispatching logic.

#### using `storeData()`

First build the data object that you'd like to store in the redux state.

As an example:

```
import { storageKeys } from '../redux/reducer';
import { getTotal } from '../some/directory';

const numOfItems = getTotal();
const data = {
    [storageKeys.Inventory]: {
        totalItems: numOfItems,
    },
};
```

Then just pass it into the storeData function to update the Redux store:

```
storeData(data);
```

### Reading data

Using the example above, the data you saved previously may now be retrieved via the following:

```
import { getStore } from '../redux/store.js';
import { storageKeys } from '../redux/reducer';

const retrievedData = getStore().getState()[storageKeys.Inventory].totalItems;
```

#### using `getStore()`

Every instance of the application provides a single Redux store for use. This redux store instance is exported from store.js and may be retrieved with the import statement:

```
import { getStore } from '../redux/store.js';
```

After the store is retrieved, its API may be accessed as described in the [Store Redux documentation](https://redux.js.org/api/store). The function `getState` in particular will retrieve the current state of the Redux store, from which data may be retrieved.

**Important Note:** Remember not to modify **any** part of the Redux store directly. Instead, manipulate it indirectly through the `storeData` function. The immutability of the store is part of the operating pattern of Redux, and any variation to this will break functionality.

### Footnote

Redux is well-known for having extensive and tedious boilerplate. This implementation has been crafted as an alternative, to reduce the extensive duplication of property names and strings but still provide the useful getting and setting behavior that redux provides. If you'd like to provide any feedback on this approach, please feel free to open an Issue (or email me).
