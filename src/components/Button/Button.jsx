import React from 'react';

function Button({ type, size, text }) {
	return (
		<button
			class={`btn btn-${type} btn-${size} btn-text text-light border-gradient`}>
			{text}
		</button>
	);
}

export default Button;
