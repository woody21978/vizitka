import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown() {
	const [visible, setVisible] = useState(false);
	return (
		<div className="dropdown">
			<button
				className="dropdown__triggers btn"
				onClick={() => {
					setVisible(!visible);
				}}>
				Сначала новые
				<svg
					className={visible ? 'svg rotate180' : 'svg'}
					width="8"
					height="5"
					viewBox="0 0 8 5"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4 3.05719L6.86193 0.195262C7.12228 -0.0650874 7.54439 -0.0650874 7.80474 0.195262C8.06509 0.455612 8.06509 0.877722 7.80474 1.13807L4.4714 4.4714C4.21105 4.73175 3.78895 4.73175 3.5286 4.4714L0.195262 1.13807C-0.0650874 0.877722 -0.0650874 0.455612 0.195262 0.195262C0.455612 -0.0650874 0.877722 -0.0650874 1.13807 0.195262L4 3.05719Z"
						fill="#92929D"
					/>
				</svg>
			</button>
			{visible && (
				<div className="dropdown__block">
					<ul className="dropdown__items">
						<li className="dropdown__item">Популярные</li>
						<li className="dropdown__item">Список - 2</li>
						<li className="dropdown__item">Список - 3</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
