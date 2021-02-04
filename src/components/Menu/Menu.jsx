import React from 'react';
import { NavLink } from 'react-router-dom';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './Menu.scss';
import Button from '../Button/Button';
import MenuLogo from './MenuLogo';

const Menu = () => {
	return (
		<div className="menu">
			<div className="container">
				<div className="menu__wrapper">
					<MenuLogo />
					<nav className="menu__nav">
						<NavLink to="/" className="menu-link">
							<div className="menu-icons">
								<svg
									className="menu-icons__item"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.9918 4.1712L12.0001 4.16686L12.0089 4.17139L16.4623 6.84345L18.0001 7.76998V18.8C18.0001 19.3931 17.9986 19.7176 17.9795 19.9508L17.9772 19.9771L17.9509 19.9794C17.7177 19.9985 17.3932 20 16.8001 20H7.20012C6.60707 20 6.28256 19.9985 6.04939 19.9794L6.02302 19.9771L6.02073 19.9508C6.00168 19.7176 6.00012 19.3931 6.00012 18.8V7.77L7.53229 6.84688L11.9918 4.1712ZM6.50181 5.13278L1.48566 8.14248C1.01208 8.42663 0.85851 9.04089 1.14266 9.51447C1.42681 9.98805 2.04107 10.1416 2.51465 9.85746L4.00012 8.96618V18.8C4.00012 19.9202 4.00012 20.4802 4.21811 20.908C4.40986 21.2844 4.71582 21.5903 5.09214 21.7821C5.51996 22 6.08002 22 7.20012 22H16.8001C17.9202 22 18.4803 22 18.9081 21.7821C19.2844 21.5903 19.5904 21.2844 19.7821 20.908C20.0001 20.4802 20.0001 19.9202 20.0001 18.8V8.96614L21.4857 9.85746C21.9592 10.1416 22.5735 9.98805 22.8576 9.51447C23.1418 9.04089 22.9882 8.42663 22.5146 8.14248L17.4927 5.12932L13.6515 2.81504C13.3723 2.64678 13.158 2.51766 12.9763 2.42057C12.9339 2.39686 12.8909 2.3748 12.8473 2.35441C12.6962 2.28065 12.5651 2.23155 12.4305 2.20189C12.147 2.13941 11.8533 2.13941 11.5697 2.20189C11.4348 2.23163 11.3034 2.28091 11.1518 2.35499C11.109 2.37505 11.0667 2.39671 11.0251 2.41996C10.8432 2.51712 10.6286 2.64643 10.3487 2.81504L6.50181 5.13278Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13 20V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20H13ZM12 13C10.3431 13 9 14.3431 9 16V22H15V16C15 14.3431 13.6569 13 12 13Z"
										fill="white"
									/>
								</svg>
								<svg
									className="menu-icons__item menu-icons__item--gradient"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<linearGradient
										id="gradient-header"
										x1="2.25757"
										y1="14"
										x2="21.7423"
										y2="14"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<linearGradient
										id="gradient-body"
										x1="7"
										y1="6"
										x2="17"
										y2="6"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M11.9918 4.1712L12.0001 4.16686L12.0089 4.17139L16.4623 6.84345L18.0001 7.76998V18.8C18.0001 19.3931 17.9986 19.7176 17.9795 19.9508L17.9772 19.9771L17.9509 19.9794C17.7177 19.9985 17.3932 20 16.8001 20H7.20012C6.60707 20 6.28256 19.9985 6.04939 19.9794L6.02302 19.9771L6.02073 19.9508C6.00168 19.7176 6.00012 19.3931 6.00012 18.8V7.77L7.53229 6.84688L11.9918 4.1712ZM6.50181 5.13278L1.48566 8.14248C1.01208 8.42663 0.85851 9.04089 1.14266 9.51447C1.42681 9.98805 2.04107 10.1416 2.51465 9.85746L4.00012 8.96618V18.8C4.00012 19.9202 4.00012 20.4802 4.21811 20.908C4.40986 21.2844 4.71582 21.5903 5.09214 21.7821C5.51996 22 6.08002 22 7.20012 22H16.8001C17.9202 22 18.4803 22 18.9081 21.7821C19.2844 21.5903 19.5904 21.2844 19.7821 20.908C20.0001 20.4802 20.0001 19.9202 20.0001 18.8V8.96614L21.4857 9.85746C21.9592 10.1416 22.5735 9.98805 22.8576 9.51447C23.1418 9.04089 22.9882 8.42663 22.5146 8.14248L17.4927 5.12932L13.6515 2.81504C13.3723 2.64678 13.158 2.51766 12.9763 2.42057C12.9339 2.39686 12.8909 2.3748 12.8473 2.35441C12.6962 2.28065 12.5651 2.23155 12.4305 2.20189C12.147 2.13941 11.8533 2.13941 11.5697 2.20189C11.4348 2.23163 11.3034 2.28091 11.1518 2.35499C11.109 2.37505 11.0667 2.39671 11.0251 2.41996C10.8432 2.51712 10.6286 2.64643 10.3487 2.81504L6.50181 5.13278Z"
										fill="url(#gradient-header)"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13 20V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20H13ZM12 13C10.3431 13 9 14.3431 9 16V22H15V16C15 14.3431 13.6569 13 12 13Z"
										fill="url(#gradient-body)"
									/>
								</svg>
							</div>
							<span className="menu-link__title">Главная</span>
						</NavLink>
						<NavLink to="/smi" className="menu-link">
							<div className="menu-icons">
								<svg
									className="menu-icons__item"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7ZM12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11Z"
										fill="white"
									/>
								</svg>
								<svg
									className="menu-icons__item menu-icons__item--gradient"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<linearGradient
										id="gradient"
										x1="7"
										y1="6"
										x2="17"
										y2="6"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										fill="url(#gradient)"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7ZM12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11Z"
										fill="url(#gradient)"
									/>
								</svg>
							</div>
							<span className="menu-link__title">СМИ</span>
						</NavLink>
						<NavLink
							onMouseOver={() => {
								state.headerMenu.isOpen = true;
							}}
							// onMouseOut={() => {
							// 	state.headerMenu.isOpen = false;
							// }}
							to="product"
							className="menu-link">
							<div className="menu-icons">
								<svg
									className="menu-icons__item"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17.7422 8H6.25782C5.10418 8 4.18975 8.97336 4.26171 10.1248L4.76171 18.1248C4.82759 19.1788 5.70169 20 6.75782 20H17.2422C18.2983 20 19.1724 19.1788 19.2383 18.1248L19.7383 10.1248C19.8103 8.97336 18.8959 8 17.7422 8ZM6.25782 6C3.95053 6 2.12168 7.94672 2.26561 10.2495L2.76561 18.2495C2.89737 20.3577 4.64557 22 6.75782 22H17.2422C19.3545 22 21.1027 20.3577 21.2344 18.2495L21.7344 10.2495C21.8783 7.94672 20.0495 6 17.7422 6H6.25782Z"
										fill="white"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V7Z"
										fill="white"
									/>
								</svg>

								<svg
									className="menu-icons__item menu-icons__item--gradient"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<linearGradient
										id="gradient-header"
										x1="2.25757"
										y1="14"
										x2="21.7423"
										y2="14"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<linearGradient
										id="gradient-body"
										x1="7"
										y1="6"
										x2="17"
										y2="6"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17.7422 8H6.25782C5.10418 8 4.18975 8.97336 4.26171 10.1248L4.76171 18.1248C4.82759 19.1788 5.70169 20 6.75782 20H17.2422C18.2983 20 19.1724 19.1788 19.2383 18.1248L19.7383 10.1248C19.8103 8.97336 18.8959 8 17.7422 8ZM6.25782 6C3.95053 6 2.12168 7.94672 2.26561 10.2495L2.76561 18.2495C2.89737 20.3577 4.64557 22 6.75782 22H17.2422C19.3545 22 21.1027 20.3577 21.2344 18.2495L21.7344 10.2495C21.8783 7.94672 20.0495 6 17.7422 6H6.25782Z"
										fill="url(#gradient-header)"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V7Z"
										fill="url(#gradient-body)"
									/>
								</svg>
							</div>
							<div className="menu-multi">
								<span className="menu-link__title">Товары</span>
								{/* Иконка */}
							</div>
						</NavLink>
						<NavLink to="wiki" className="menu-link">
							<div className="menu-icons">
								<svg
									className="menu-icons__item"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3 5C3 2.79086 4.79086 1 7 1H15.3431C16.404 1 17.4214 1.42143 18.1716 2.17157L19.8284 3.82843C20.5786 4.57857 21 5.59599 21 6.65685V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5ZM19 8V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14V5C14 6.65685 15.3431 8 17 8H19ZM18.8891 6C18.7909 5.7176 18.6296 5.45808 18.4142 5.24264L16.7574 3.58579C16.5419 3.37035 16.2824 3.20914 16 3.11094V5C16 5.55228 16.4477 6 17 6H18.8891Z"
										fill="white"
									/>
									<path
										d="M9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9Z"
										fill="white"
									/>
									<path
										d="M9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9Z"
										fill="white"
									/>
								</svg>

								<svg
									className="menu-icons__item menu-icons__item--gradient"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<linearGradient
										id="gradient"
										x1="7"
										y1="6"
										x2="17"
										y2="6"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3 5C3 2.79086 4.79086 1 7 1H15.3431C16.404 1 17.4214 1.42143 18.1716 2.17157L19.8284 3.82843C20.5786 4.57857 21 5.59599 21 6.65685V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5ZM19 8V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14V5C14 6.65685 15.3431 8 17 8H19ZM18.8891 6C18.7909 5.7176 18.6296 5.45808 18.4142 5.24264L16.7574 3.58579C16.5419 3.37035 16.2824 3.20914 16 3.11094V5C16 5.55228 16.4477 6 17 6H18.8891Z"
										fill="url(#gradient)"
									/>
									<path
										d="M9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9Z"
										fill="url(#gradient)"
									/>
									<path
										d="M9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9Z"
										fill="url(#gradient)"
									/>
								</svg>
							</div>
							<span className="menu-link__title">Википедия</span>
						</NavLink>
						<NavLink to="contacts" className="menu-link">
							<div className="menu-icons">
								<svg
									className="menu-icons__item"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2ZM7 0C5.34315 0 4 1.34315 4 3V21C4 22.6569 5.34315 24 7 24H17C18.6569 24 20 22.6569 20 21V3C20 1.34315 18.6569 0 17 0H7Z"
										fill="white"
									/>
									<path
										d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
										fill="white"
									/>
								</svg>
								<svg
									className="menu-icons__item menu-icons__item--gradient"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<linearGradient
										id="gradient"
										x1="7"
										y1="6"
										x2="17"
										y2="6"
										gradientUnits="userSpaceOnUse">
										<stop stopColor="#9C6D41" />
										<stop offset="0.526042" stopColor="#DCAD68" />
										<stop offset="1" stopColor="#9C6D41" />
									</linearGradient>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2ZM7 0C5.34315 0 4 1.34315 4 3V21C4 22.6569 5.34315 24 7 24H17C18.6569 24 20 22.6569 20 21V3C20 1.34315 18.6569 0 17 0H7Z"
										fill="url(#gradient)"
									/>
									<path
										d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
										fill="url(#gradient)"
									/>
								</svg>
							</div>
							<span className="menu-link__title">Контакты</span>
						</NavLink>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default view(Menu);
