import React from 'react';
import './ProductWine.scss';
// Компоненты
import Button from '../Button/Button';

function ProductWhine({ product }) {
	const { id, img, price, rating, title, subtitle, characterization } = product;
	const { region, producer, fortress, grade, whine } = characterization;
	const getRating = (rating) => {
		let content = [];
		let count = 5;
		if (rating > 0) {
			for (let i = 1; i <= rating; i++) {
				count--;
				content.push(
					<div className="wine-rating__item">
						<img src="../images/icons/star-fill.png" alt="" />
					</div>
				);
			}
		}
		if (count > 0) {
			for (let i = 0; i < count; i++) {
				content.push(
					<div className="wine-rating__item">
						<img src="../images/icons/star-border.png" alt="" />
					</div>
				);
			}
		}
		return content;
	};
	return (
		<div className="wine">
			<div className="wine-main">
				<img src={img} alt="" className="wine__photo" />
				<div className="wine-info">
					<span className="wine-info__title">{title}</span>
					<p className="wine-info__subtitle">{subtitle}</p>
					<div className="wine-rating">
						{getRating(rating)}
						<span className="wine-rating__num">20</span>
					</div>
					<p className="wine-info__price">
						{price}
						<span className="wine-info__price__valute">₽</span>
					</p>
					<Button type="gold" size="xs" text="Подробнее" />
				</div>
			</div>
			<div className="wine-characteristic">
				<p className="wine-characteristic__name">
					Регион: <span className="wine-characteristic__desc">{region}</span>
				</p>
				<p className="wine-characteristic__name">
					Производитель:{' '}
					<span className="wine-characteristic__desc">{producer}</span>
				</p>
				<p className="wine-characteristic__name">
					Крепость:{' '}
					<span className="wine-characteristic__desc">{fortress}%</span>
				</p>
				<p className="wine-characteristic__name">
					Сорт винограда:{' '}
					<span className="wine-characteristic__desc">{grade}</span>
				</p>
				<p className="wine-characteristic__name">
					Вино: <span className="wine-characteristic__desc">{whine}</span>
				</p>
				<p className="wine-characteristic__name">
					Подробнее:{' '}
					<span className="wine-characteristic__desc">
						https://leofisun.com
					</span>
				</p>
			</div>
		</div>
	);
}

export default ProductWhine;
