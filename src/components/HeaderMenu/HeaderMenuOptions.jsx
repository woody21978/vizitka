import React from 'react';

export default function HeaderMenuOptions({ options }) {
	return (
		<div className="header-menu-options">
			{options.map(({ id, name }) => (
				<div key={id} className="header-menu-options__option">
					{name}
				</div>
			))}
		</div>
	);
}
