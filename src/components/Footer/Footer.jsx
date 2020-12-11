import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-grid">
					<div className="footer-column">
						<p className="footer-column__title">Полезное</p>
						<ul className="footer-list">
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									О компании
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Контакты и офисы
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Новости
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Карьера в REG.RU
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Команда
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Отзыв клиентов
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<p className="footer-column__title">Услуги</p>
						<ul className="footer-list">
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Стоимость услуг
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Хостинг
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Зарегистрировать домен
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Конструктор и CMS
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									VPS
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Серверы и ДЦ
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<p className="footer-column__title">Партнеры</p>
						<ul className="footer-list">
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Партнерские программы
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Провессионалам IT
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Бонусная программа
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									REG.reseller
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									REG.API
								</a>
							</li>
							<li className="footer-list__item">
								<a href="#" className="footer-list__link">
									Промо материалы
								</a>
							</li>
						</ul>
					</div>

					<div className="footer-column">
						<div className="footer-company">
							<img
								src="../images/icons/footer/ssl.png"
								alt=""
								className="footer-company__icon"
							/>
							<img
								src="../images/icons/footer/footer-name.svg"
								alt=""
								className="footer-company__title"
							/>
						</div>
					</div>

					<div className="footer-column">
						<p className="footer-column__title">Платежные системы</p>
						<div className="footer-payments">
							<img
								src="../images/icons/payment/qiwi.svg"
								alt=""
								className="footer-payments__item"
							/>
							<img
								src="../images/icons/payment/yandex.svg"
								alt=""
								className="footer-payments__item"
							/>
							<img
								src="../images/icons/payment/bitcoin.svg"
								alt=""
								className="footer-payments__item"
							/>
							<img
								src="../images/icons/payment/ethereum.svg"
								alt=""
								className="footer-payments__item"
							/>
							<img
								src="../images/icons/payment/webmoney.svg"
								alt=""
								className="footer-payments__item"
							/>
							<img
								src="../images/icons/payment/tinkoff.svg"
								alt=""
								className="footer-payments__item"
							/>
						</div>
					</div>

					<div className="footer-column">
						<p className="footer-column__title">Leowine.fun</p>
						<p className="footer-column__copyright">
							© ООО «Все права защищены»
						</p>
					</div>

					<div className="footer-column">
						<p className="footer-column__title">Связь со мной</p>
						<div className="footer-social">
							<img
								src="../images/icons/social/telegram-lg.svg"
								alt=""
								className="footer-social__item"
							/>
							<img
								src="../images/icons/social/vk-lg.svg"
								alt=""
								className="footer-social__item"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
