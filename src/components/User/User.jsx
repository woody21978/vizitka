import React from 'react';
import './User.scss';
import Button from '../Button/Button.jsx';

function User() {
	return (
		<div className="user">
			<div className="user-avatar">
				<img src="./images/avatar.jpg" className="user-avatar__img" alt="" />
				<div className="user-icon">
					<div className="user-icon-block">
						<img
							src="./images/icons/tic.svg"
							alt=""
							className="user-icon-block__img"
						/>
					</div>
				</div>
			</div>
			<div className="user-text">
				<p className="user-text__title">Фисун Лев Андреевич</p>
				<p className="user-text__subtitle">
					Предприниматель, инвестор, контент-мейкер
				</p>
			</div>
			<div className="user-social">
				<div className="user-social__item">
					<img src="../images/icons/social/telegram-xs.svg" alt="" />
				</div>
				<div className="user-social__item user-social__item--margin">
					<Button type="gold" size="xs" text="Упоминания в СМИ" />
				</div>
				<div className="user-social__item">
					<img src="../images/icons/social/vk-xs.svg" alt="" />
				</div>
			</div>
		</div>
	);
}

export default User;
