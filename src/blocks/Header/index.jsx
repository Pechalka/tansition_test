import React, { Component } from 'react';

import { Menu } from 'blocks/Menu/';

import './index.scss';

export class Header extends Component {
	render() {
		return (
			<header className='header'>
				<div className='container'>
					<div className='header__top'>
						<div className='header__logo'>
							logo
						</div>
						<div className='header__search'>
							search
						</div>
						<div className='header__menu'>
							<Menu />
						</div>
					</div>
				</div>
			</header>
		);
	}
}
