import React from 'react';
import './ContactForm.scss';

function ContactForm() {
	return (
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
	);
}

export default ContactForm;
