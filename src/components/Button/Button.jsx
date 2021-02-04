import React from 'react';
import './Button.scss';

const Button = ({ type, size, text, action }) => {
	return (
		<button
			className={`btn btn-${type} btn-${size} border-gradient`}
			onClick={action}>
			{text}
		</button>
	);
};

export default Button;
