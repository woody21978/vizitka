import React from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import './index.scss';
import HeaderMenuWrapper from './HeaderMenuWrapper';
import HeaderMenuBar from './HeaderMenuBar';
import HeaderMenuOptions from './HeaderMenuOptions';

function HeaderMenu() {
	return (
		<HeaderMenuWrapper
			onMouseOver={() => {
				state.headerMenu.isOpen = true;
			}}
			onMouseLeave={() => {
				state.headerMenu.isOpen = false;
			}}>
			<HeaderMenuBar
				options={state.headerMenu.list}
				onMouseOver={(id) => {
					state.headerMenu.selectedId = id;
				}}
			/>
			<HeaderMenuOptions
				options={state.headerMenu.list[state.headerMenu.selectedId].options}
			/>
		</HeaderMenuWrapper>
	);
}

export default view(HeaderMenu);
