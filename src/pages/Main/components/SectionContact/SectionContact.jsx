import React from 'react';
import './SectionContact.scss';
// Компоненты
import ContactForm from '../ContactForm/ContactForm';

function SectionContact() {
	return (
		<section className="section section--contact bg-main">
			<div className="container">
				<div className="section-header">
					<p className="section__title">Контакты</p>
				</div>
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

					<ContactForm />
				</div>
			</div>
		</section>
	);
}

export default SectionContact;
