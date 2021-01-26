import React from 'react';
import './Button.scss';

function Button({ type, size, text, action }) {
	return (
		<button
			className={`btn btn-${type} btn-${size} btn-text text-light border-gradient`}
			onClick={action}>
			{text}
		</button>
	);
}

export default Button;
