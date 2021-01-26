import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';
import Button from '../Button/Button';
import TextGradient from 'react-textgradient';

function Menu() {
	return (
		<div className="menu">
			<div className="container">
				<div className="menu__wrapper">
					<div className="menu-logo">
						<p className="menu-logo__title">
							<TextGradient
								text="LEO"
								fromColor="#9C6D41"
								toColor="#DCAD68"
								direction="right"
							/>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Menu;
