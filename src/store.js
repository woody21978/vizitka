import { store } from '@risingstack/react-easy-state';

const state = store({
	sliders: { followers: { min: 10, max: 20 }, views: { min: 10, max: 20 } },
	dropDowns: {
		media: {
			selected: 'Сначала новые',
			list: ['Популярные', 'писок - 2', 'писок - 3'],
		},
	},
	// SMI
	media: [
		{
			id: 1,
			title: 'Sarreg.ru',
			desc:
				'В сети Интернет можно найти массу предложений, в которых всем желающим предлагается «уникальная» возможность заработать быстрые деньги. Причём для того, чтобы получать стабильный...',
			date: '25.06.2020',
			type: 'new',
		},
		{
			id: 2,
			title: 'vbalashihe.ru',
			desc:
				'Стремительное развитие информационных технологий, в том числе глобальной сети Интернет, привело к появлению новой отрасли в рыночном пространстве – электронной коммерции. Применение широчайшего...',
			date: '02.05.2020',
			type: 'new',
		},
		{
			id: 3,
			title: 'infoorel.ru',
			desc:
				'Как часто мы слышим и читаем информационные сообщения о бескрайних возможностях и неограниченном потенциале сети Интернет как бизнес-инструмента! Действительно, с течением времени...',
			date: '15.05.2020',
			type: 'new',
		},
	],

	swiper: {
		background: '../images/swiper/slides.jpg',
		slides: [
			{
				id: 1,
				title: 'FisunWine Since 1901',
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sed do eiusmod tempor incididunt ut labore.',
			},
			{
				id: 2,
				title: 'YouTube social',
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sed do eiusmod tempor incididunt ut labore.',
			},
			{
				id: 3,
				title: 'Website Domains Names & Hosting',
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sed do eiusmod tempor incididunt ut labore.',
			},
		],
	},

	// Product Whine
	productWine: {
		offset: 4,
		wines: [
			{
				id: 1,
				img: '../images/products/wines/wine-rose.png',
				title: 'Российское вино Rose de Gai-Kodzor розовое',
				subtitle: 'Muscat de Gai-Kodzor Sec, 750 мл',
				price: 957,
				rating: 3,
				characterization: {
					region: 'Россия, Краснодарский край, Гай-Кодзор',
					producer: 'ООО Виноградники Гай-Кодзора',
					fortress: 12.5,
					grade: 'Мускат',
					whine: 'Белое, Сухое',
					more: 'https://leofisun.com',
				},
			},
			{
				id: 2,
				img: '../images/products/wines/wine-chardonnay.png',
				title: 'Вино Gai-Kodzor Chardonnay белое сухое',
				subtitle: 'Muscat de Gai-Kodzor Sec, 750 мл',
				price: 957,
				rating: 3,
				characterization: {
					region: 'Россия, Краснодарский край, Гай-Кодзор',
					producer: 'ООО Виноградники Гай-Кодзора',
					fortress: 12.5,
					grade: 'Мускат',
					whine: 'Белое, Сухое',
					more: 'https://leofisun.com',
				},
			},
			{
				id: 3,
				img: '../images/products/wines/wine-kodzor.png',
				title: 'Российское вино Rose de Gai-Kodzor розовое',
				subtitle: 'Muscat de Gai-Kodzor Sec, 750 мл',
				price: 957,
				rating: 3,
				characterization: {
					region: 'Россия, Краснодарский край, Гай-Кодзор',
					producer: 'ООО Виноградники Гай-Кодзора',
					fortress: 12.5,
					grade: 'Мускат',
					whine: 'Белое, Сухое',
					more: 'https://leofisun.com',
				},
			},
			{
				id: 4,
				img: '../images/products/wines/wine-white.png',
				title: 'Российское вино Rose de Gai-Kodzor розовое',
				subtitle: 'Muscat de Gai-Kodzor Sec, 750 мл',
				price: 957,
				rating: 3,
				characterization: {
					region: 'Россия, Краснодарский край, Гай-Кодзор',
					producer: 'ООО Виноградники Гай-Кодзора',
					fortress: 12.5,
					grade: 'Мускат',
					whine: 'Белое, Сухое',
					more: 'https://leofisun.com',
				},
			},
		],
	},
});

export default state;
