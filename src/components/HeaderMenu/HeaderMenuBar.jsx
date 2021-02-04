import React from 'react';

export default function HeaderMenuBar({ options, onMouseOver }) {
	return (
		<div className="header-menu-bar">
			{options.map(({ id, name }) => (
				<div
					onMouseOver={() => {
						onMouseOver(id);
					}}
					key={id}
					className="header-menu-bar__option">
					{name}
				</div>
			))}
		</div>
	);
}
