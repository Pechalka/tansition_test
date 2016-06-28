import React, { Component } from 'react';

import './index.scss';

export class Footer extends Component {
	render() {
		return (
			<div className='footer__wrapper'>
				<div className='footer__content'>
	        		{this.props.children}
	        		<div  className='footer__empty'></div>
	            </div>
				<footer className='footer'>
					<div className='container'>
								footer
					</div>
				</footer>
			</div>
		);
	}
}
