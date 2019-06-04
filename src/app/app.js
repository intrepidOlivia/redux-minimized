import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewItemButton from './new_item_button';
import InventoryList from './inventory_list';

function App(props) {
	return (
		<div>
			<h2>Sample Inventory</h2>
			<hr />
			<InventoryList
				items={props.items}
			/>
			<NewItemButton />
		</div>
	);
}

const mapStateToProps = (store) => ({
	numOfItems: store.Inventory.numOfItems,
	items: store.Inventory.items,
})

export default connect(mapStateToProps)(App);
