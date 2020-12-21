import React from 'react';
import './ContactForm.scss';
// Компоненты
// import Button from '../Button/Button';

function ContactForm() {
	return (
		<div className="contact">
			<div className="contact-info">
				<div className="contact-text">
					<p className="contact-text__title">Мои контакты</p>
					<p className="contact-text__subtitle">и обратная связь</p>
				</div>
				<div className="contact-social">
					<div className="contact-social__item">
						<img
							src="../images/icons/social/web-md.svg"
							alt=""
							className="contact-social__icon"
						/>
						<p className="contact-social__title">
							Websites:{' '}
							<a href="#" className="contact-social__link">
								qcentrum.com / leofisun.com
							</a>
						</p>
					</div>
					{/* /.contact-social__item */}

					<div className="contact-social__item">
						<img
							src="../images/icons/social/vk-md.svg"
							alt=""
							className="contact-social__icon"
						/>
						<p className="contact-social__title">
							Вконтакте:{' '}
							<a href="#" className="contact-social__link">
								vk.com/leonardo
							</a>
						</p>
					</div>
					{/* /.contact-social__item */}

					<div className="contact-social__item">
						<img
							src="../images/icons/social/telegram-md.svg"
							alt=""
							className="contact-social__icon"
						/>
						<p className="contact-social__title">
							Telegram:{' '}
							<a href="#" className="contact-social__link">
								@Steklie
							</a>
						</p>
					</div>
					{/* /.contact-social__item */}
				</div>
			</div>
			<form className="contact-form border-gradient">
				<div className="contact-form__item">
					<input
						type="text"
						className="contact-form__input"
						placeholder="Имя"
						required
					/>
					<input
						type="email"
						className="contact-form__input"
						placeholder="Email"
						required
					/>
				</div>
				<div className="contact-form__item">
					<textarea
						className="contact-form__textarea"
						placeholder="Ваше сообщение"></textarea>
				</div>
				<div className="contact-form__item contact-form__item--center">
					<button class="btn btn-gold btn-text text-light border-gradient contact-form__btn">
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
