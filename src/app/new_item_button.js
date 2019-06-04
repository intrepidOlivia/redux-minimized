import React from 'react';
import * as actions from '../redux/actions/user_actions';

/**
 * @param props
 * @constructor
 */
function NewItemButton(props) {
	return (
		<button className="add-button" onClick={actions.addItem()}>Add New Item</button>
	);
}

export default NewItemButton;
