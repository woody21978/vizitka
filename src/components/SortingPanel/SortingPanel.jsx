import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './SortingPanel.scss';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThemeDropDown from '../ThemeDropDown/ThemeDropDown';

const useStyles = makeStyles({
	root: {
		width: 300,
	},
	label: { color: '#fff' },

	radio: {
		color: ' #333333',
		'&$checked': {
			color: '#d5a664',
		},
	},
	checked: {},
});

function onRangeMinChange(slider, min) {
	if (slider === 'followers') {
		state.sliders.followers.min = min;
		console.log(state.sliders.followers.min);
	}
	if (slider === 'views') {
		state.sliders.views.min = min;
	}
}

function onRangeMaxChange(slider, max) {
	if (slider === 'followers') {
		state.sliders.followers.max = max;
		console.log(state.sliders.followers.max);
	}
	if (slider === 'views') {
		state.sliders.views.max = max;
	}
}

const CustomSlider = withStyles({
	root: {
		height: 3,
		padding: '13px 0',
		margin: '0 30px',
	},
	thumb: {
		color: '#d5a664',
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	track: {
		backgroundImage: 'linear-gradient(to left, #9c6d41, #dcad68, #9c6d41)',
		height: 3,
	},
	rail: {
		color: '#222',
		opacity: 1,
		height: 3,
	},
})(Slider);

function valuetext(value) {
	return `${value}°C`;
}

function SortingPanel() {
	const classes = useStyles();
	const [value, setValue] = useState([20, 37]);
	const [value2, setValue2] = useState([0, 100]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		onRangeMinChange('followers', value[0]);
		onRangeMaxChange('followers', value[1]);
	};

	const handleChange2 = (event, newValue) => {
		setValue2(newValue);
		onRangeMinChange('views', value2[0]);
		onRangeMaxChange('views', value2[1]);
	};

	{
		/* <Slider
				className={classes.root}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
			/> */
	}

	return (
		<div className="sorting-panel">
			<div className="sorting-panel-block">
				<span className="sorting-panel-block__label">
					Количество подписчиков
				</span>

				<div className="sorting-panel-block-slider">
					<div className="sorting-panel-input">
						<span className="sorting-panel-input__text">От</span>
						<input
							type="number"
							value={state.sliders.followers.min}
							onChange={(event) => {
								setValue([event.target.value, value[1]]);
								onRangeMinChange('followers', event.target.value);
							}}
							className="sorting-panel-input__input"
						/>
					</div>

					<CustomSlider
						className={classes.root}
						value={value}
						onChange={handleChange}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
						getAriaValueText={valuetext}
					/>

					<div className="sorting-panel-input">
						<span className="sorting-panel-input__text">До</span>
						<input
							type="number"
							value={state.sliders.followers.max}
							onChange={(event) => {
								setValue([value[0], event.target.value]);
								onRangeMaxChange('followers', event.target.value);
							}}
							className="sorting-panel-input__input"
						/>
					</div>
				</div>

				<span className="sorting-panel-block__label">Тематика</span>
				<div className="sorting-panel-block__dropdown">
					<ThemeDropDown list={state.dropDowns.theme.list} />
				</div>
			</div>

			<div className="sorting-panel-block">
				<span className="sorting-panel-block__label">
					Количество просмотров
				</span>

				<div className="sorting-panel-block-slider">
					<div className="sorting-panel-input">
						<span className="sorting-panel-input__text">От</span>
						<input
							type="number"
							value={state.sliders.views.min}
							onChange={(event) => {
								setValue2([event.target.value, value2[1]]);
								onRangeMinChange('views', event.target.value);
							}}
							className="sorting-panel-input__input"
						/>
					</div>

					<CustomSlider
						className={classes.root}
						value={value2}
						onChange={handleChange2}
						valueLabelDisplay="auto"
						aria-labelledby="range-slider"
						getAriaValueText={valuetext}
					/>

					<div className="sorting-panel-input">
						<span className="sorting-panel-input__text">До</span>
						<input
							type="number"
							value={state.sliders.views.max}
							onChange={(event) => {
								setValue2([value2[0], event.target.value]);
								onRangeMaxChange('views', event.target.value);
							}}
							className="sorting-panel-input__input"
						/>
					</div>
				</div>

				<span className="sorting-panel-block__label">Нарушения</span>
				<div className="sorting-panel-block__dropdown">
					<ThemeDropDown list={state.dropDowns.violation.list} />
				</div>
			</div>

			<div className="sorting-panel-block">
				<span className="sorting-panel-block__label">Монетизация</span>

				<RadioGroup
					row
					aria-label="position"
					name="position"
					defaultValue="end">
					<FormControlLabel
						className={classes.label}
						value="Выключена"
						control={
							<Radio
								classes={{ root: classes.radio, checked: classes.checked }}
							/>
						}
						label="Выключена"
						labelPlacement="end"
					/>

					<FormControlLabel
						className={classes.label}
						value="Включена"
						control={
							<Radio
								classes={{ root: classes.radio, checked: classes.checked }}
							/>
						}
						label="Включена"
						labelPlacement="end"
					/>
				</RadioGroup>

				<span className="sorting-panel-block__label">Тип аккаунта</span>

				<RadioGroup
					row
					aria-label="position"
					name="position"
					defaultValue="end">
					<FormControlLabel
						className={classes.label}
						value="Все"
						control={
							<Radio
								classes={{ root: classes.radio, checked: classes.checked }}
							/>
						}
						label="Все"
						labelPlacement="end"
					/>

					<FormControlLabel
						className={classes.label}
						value="Премиум"
						control={
							<Radio
								classes={{ root: classes.radio, checked: classes.checked }}
							/>
						}
						label="Премиум"
						labelPlacement="end"
					/>

					<FormControlLabel
						className={classes.label}
						value="Горячие"
						control={
							<Radio
								classes={{ root: classes.radio, checked: classes.checked }}
							/>
						}
						label="Горячие"
						labelPlacement="end"
					/>
				</RadioGroup>
			</div>
		</div>
	);
}

export default view(SortingPanel);
