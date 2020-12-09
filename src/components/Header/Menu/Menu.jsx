import React from 'react';
import './Menu.scss';
import Button from '../../Button/Button';

function Menu() {
	return (
		<div className="wrapper-menu">
			<div className="container">
				<div className="menu">
					<img src="../images/logo.png" alt="" className="menu__logo" />
					<nav className="menu__nav">
						<ul className="menu__list">
							<li className="menu__item border-gradient menu__item--active border-gradient">
								<svg
									class="menu__icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.9916 4.1712L12 4.16686L12.0087 4.17139L16.4622 6.84345L18 7.76998V18.8C18 19.3931 17.9984 19.7176 17.9794 19.9508L17.9771 19.9771L17.9507 19.9794C17.7176 19.9985 17.3931 20 16.8 20H7.2C6.60695 20 6.28244 19.9985 6.04927 19.9794L6.0229 19.9771L6.02061 19.9508C6.00156 19.7176 6 19.3931 6 18.8V7.77L7.53217 6.84688L11.9916 4.1712ZM6.50169 5.13278L1.48553 8.14248C1.01195 8.42663 0.858388 9.04089 1.14254 9.51447C1.42668 9.98805 2.04094 10.1416 2.51452 9.85746L4 8.96618V18.8C4 19.9202 4 20.4802 4.21799 20.908C4.40973 21.2844 4.71569 21.5903 5.09202 21.7821C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.7821C19.2843 21.5903 19.5903 21.2844 19.782 20.908C20 20.4802 20 19.9202 20 18.8V8.96614L21.4855 9.85746C21.9591 10.1416 22.5734 9.98805 22.8575 9.51447C23.1417 9.04089 22.9881 8.42663 22.5145 8.14248L17.4926 5.12932L13.6514 2.81504C13.3721 2.64678 13.1578 2.51766 12.9762 2.42057C12.9338 2.39686 12.8908 2.3748 12.8472 2.35441C12.696 2.28065 12.565 2.23155 12.4304 2.20189C12.1469 2.13941 11.8531 2.13941 11.5696 2.20189C11.4346 2.23163 11.3033 2.28091 11.1516 2.35499C11.1088 2.37505 11.0666 2.39671 11.0249 2.41996C10.8431 2.51712 10.6285 2.64643 10.3486 2.81504L6.50169 5.13278Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.9916 4.1712L12 4.16686L12.0087 4.17139L16.4622 6.84345L18 7.76998V18.8C18 19.3931 17.9984 19.7176 17.9794 19.9508L17.9771 19.9771L17.9507 19.9794C17.7176 19.9985 17.3931 20 16.8 20H7.2C6.60695 20 6.28244 19.9985 6.04927 19.9794L6.0229 19.9771L6.02061 19.9508C6.00156 19.7176 6 19.3931 6 18.8V7.77L7.53217 6.84688L11.9916 4.1712ZM6.50169 5.13278L1.48553 8.14248C1.01195 8.42663 0.858388 9.04089 1.14254 9.51447C1.42668 9.98805 2.04094 10.1416 2.51452 9.85746L4 8.96618V18.8C4 19.9202 4 20.4802 4.21799 20.908C4.40973 21.2844 4.71569 21.5903 5.09202 21.7821C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.7821C19.2843 21.5903 19.5903 21.2844 19.782 20.908C20 20.4802 20 19.9202 20 18.8V8.96614L21.4855 9.85746C21.9591 10.1416 22.5734 9.98805 22.8575 9.51447C23.1417 9.04089 22.9881 8.42663 22.5145 8.14248L17.4926 5.12932L13.6514 2.81504C13.3721 2.64678 13.1578 2.51766 12.9762 2.42057C12.9338 2.39686 12.8908 2.3748 12.8472 2.35441C12.696 2.28065 12.565 2.23155 12.4304 2.20189C12.1469 2.13941 11.8531 2.13941 11.5696 2.20189C11.4346 2.23163 11.3033 2.28091 11.1516 2.35499C11.1088 2.37505 11.0666 2.39671 11.0249 2.41996C10.8431 2.51712 10.6285 2.64643 10.3486 2.81504L6.50169 5.13278Z"
										fill="url(#paint0_linear)"
									/>
									<mask id="path-2-inside-1" fill="white">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13 20V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20H13ZM12 13C10.3431 13 9 14.3431 9 16V22H15V16C15 14.3431 13.6569 13 12 13Z"
										/>
									</mask>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M13 20V16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16V20H13ZM12 13C10.3431 13 9 14.3431 9 16V22H15V16C15 14.3431 13.6569 13 12 13Z"
										fill="white"
									/>
									<path
										d="M13 20V22H15V20H13ZM11 20H9V22H11V20ZM9 22H7V24H9V22ZM15 22V24H17V22H15ZM11 16V20H15V16H11ZM12 17C11.4477 17 11 16.5523 11 16H15C15 14.3431 13.6569 13 12 13V17ZM13 16C13 16.5523 12.5523 17 12 17V13C10.3431 13 9 14.3431 9 16H13ZM13 20V16H9V20H13ZM13 18H11V22H13V18ZM11 16C11 15.4477 11.4477 15 12 15V11C9.23858 11 7 13.2386 7 16H11ZM12 15C12.5523 15 13 15.4477 13 16H17C17 13.2386 14.7614 11 12 11V15ZM11 22V16H7V22H11ZM15 20H9V24H15V20ZM13 16V22H17V16H13Z"
										fill="url(#paint1_linear)"
										mask="url(#path-2-inside-1)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear"
											x1="0.999878"
											y1="12.0775"
											x2="23.0002"
											y2="12.0775"
											gradientUnits="userSpaceOnUse">
											<stop stop-color="#9C6D41" />
											<stop offset="0.526042" stop-color="#DCAD68" />
											<stop offset="1" stop-color="#9C6D41" />
										</linearGradient>
										<linearGradient
											id="paint1_linear"
											x1="4"
											y1="22"
											x2="21"
											y2="9.5"
											gradientUnits="userSpaceOnUse">
											<stop stop-color="#9C6D41" />
											<stop offset="0.526042" stop-color="#DCAD68" />
											<stop offset="1" stop-color="#9C6D41" />
										</linearGradient>
									</defs>
								</svg>
								<a href="#" className="menu__link">
									Главная
								</a>
							</li>
							<li className="menu__item">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7ZM12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11Z"
										fill="white"
									/>
								</svg>
								<a href="#" className="menu__link">
									СМИ
								</a>
							</li>
							<li className="menu__item">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M17.7422 8H6.25782C5.10418 8 4.18975 8.97336 4.26171 10.1248L4.76171 18.1248C4.82759 19.1788 5.70169 20 6.75782 20H17.2422C18.2983 20 19.1724 19.1788 19.2383 18.1248L19.7383 10.1248C19.8103 8.97336 18.8959 8 17.7422 8ZM6.25782 6C3.95053 6 2.12168 7.94672 2.26561 10.2495L2.76561 18.2495C2.89737 20.3577 4.64557 22 6.75782 22H17.2422C19.3545 22 21.1027 20.3577 21.2344 18.2495L21.7344 10.2495C21.8783 7.94672 20.0495 6 17.7422 6H6.25782Z"
										fill="white"
									/>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V9C17 9.55228 16.5523 10 16 10C15.4477 10 15 9.55228 15 9V7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V7Z"
										fill="white"
									/>
								</svg>
								<a href="#" className="menu__link">
									Товары
								</a>
							</li>
							<li className="menu__item">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
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
								<a href="#" className="menu__link">
									Википедия
								</a>
							</li>
							<li className="menu__item">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2ZM7 0C5.34315 0 4 1.34315 4 3V21C4 22.6569 5.34315 24 7 24H17C18.6569 24 20 22.6569 20 21V3C20 1.34315 18.6569 0 17 0H7Z"
										fill="white"
									/>
									<path
										d="M13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z"
										fill="white"
									/>
								</svg>
								<a href="#" className="menu__link">
									Контакты
								</a>
							</li>
						</ul>
					</nav>
					<Button type="gold" size="xs" text="Связаться" />
				</div>
			</div>
		</div>
	);
}

export default Menu;
