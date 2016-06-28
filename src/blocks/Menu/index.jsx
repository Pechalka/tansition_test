import React, { Component } from 'react';

import { Link } from 'react-router';

import './index.scss';

export class Menu extends Component {
	render() {
		return (
			<ul className='menu'>
				<li className='menu__item'>
					<Link to='/' className='menu__link'>Карта проезда</Link>
				</li>{' '}
				<li className='menu__item'>
					<Link to='/Map' className='menu__link'>История заказов</Link>
				</li>{' '}
				<li className='menu__item'>
					<Link to='/Checkout' className='menu__link'>Корзина</Link>
				</li>{' '}
			</ul>
		);
	}
}
