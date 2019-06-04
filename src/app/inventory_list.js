import React from 'react';

function InventoryList(props) {
	return props.items.map((item, index) => (
		<div key={`${item.id}_${index}`} className="inventory-item">
			{item.name}
		</div>
	));
}

export default InventoryList;
