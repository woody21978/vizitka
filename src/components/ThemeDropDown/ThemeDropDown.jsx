import React, { useState, useEffect } from 'react';
import './ThemeDropDown.scss';

export default function ThemeDropDown({ list }) {
	const [dropDown, setDropDown] = useState({
		isOpen: false,
		selected: '',
		list: [],
	});

	useEffect(() => {
		setDropDown({ selected: list[0], list: list });
	}, []);

	return (
		<div className="theme-dropdown">
			<div
				onClick={() => {
					setDropDown({ ...dropDown, isOpen: !dropDown.isOpen });
				}}
				className="theme-dropdown-selected">
				<span className="theme-dropdown-selected__item">
					{dropDown.selected.name}
				</span>

				<svg
					className={
						dropDown.isOpen
							? 'theme-dropdown-selected__img theme-dropdown-selected__img_open'
							: 'theme-dropdown-selected__img'
					}
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
			</div>

			{dropDown.isOpen && (
				<div className="theme-dropdown-list custom-scroll">
					{dropDown.list.map((item) => (
						<div
							key={item.id}
							onClick={() => {
								setDropDown({
									...dropDown,
									selected: { id: item.id, name: item.name },
									isOpen: false,
								});
								console.log(dropDown);
							}}
							className="theme-dropdown-list__item">
							{item.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
