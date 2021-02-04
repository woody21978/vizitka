import React from 'react';

export default function HeaderMenuWrapper({
	onMouseOver,
	onMouseLeave,
	children,
}) {
	return (
		<div
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
			className="header-menu-wrapper">
			{children}
		</div>
	);
}
