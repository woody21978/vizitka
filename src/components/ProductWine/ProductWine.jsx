import React from 'react';
import './ProductWine.scss';
// Компоненты
import Button from '../Button/Button';

function ProductWhine() {
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
				<img
					src="../images/products/whines/whine-rose.png"
					alt=""
					className="wine__photo"
				/>
				<div className="wine-info">
					<span className="wine-info__title">
						Российское вино Rose de Gai-Kodzor розовое
					</span>
					<p className="wine-info__subtitle">
						Muscat de Gai-Kodzor Sec, 750 мл
					</p>
					<div className="wine-rating">
						{getRating(5)}
						<span className="wine-rating__num">20</span>
					</div>
					<p className="wine-info__price">
						957<span className="wine-info__price__valute">₽</span>
					</p>
					<Button type="gold" size="xs" text="Подробнее" />
				</div>
			</div>
			<div className="wine-characteristic">
				<p className="wine-characteristic__name">
					Регион:{' '}
					<span className="wine-characteristic__desc">
						Россия, Краснодарский край, Гай-Кодзор
					</span>
				</p>
				<p className="wine-characteristic__name">
					Производитель:{' '}
					<span className="wine-characteristic__desc">
						ООО Виноградники Гай-Кодзора
					</span>
				</p>
				<p className="wine-characteristic__name">
					Крепость: <span className="wine-characteristic__desc">12.5%</span>
				</p>
				<p className="wine-characteristic__name">
					Сорт винограда:{' '}
					<span className="wine-characteristic__desc">Мускат</span>
				</p>
				<p className="wine-characteristic__name">
					Вино: <span className="wine-characteristic__desc">Белое, Сухое</span>
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
