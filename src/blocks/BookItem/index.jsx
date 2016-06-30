
const React = require('react');


require('./index.scss');

import { Link } from 'react-router';

const BookItem = React.createClass({
	render() {
		const { book } = this.props;
		return (
			<div className='book-item'>
				<h2>{book.title}</h2>
				<Link to={`/Sales/${book.id}`} className='book-item__details'>details</Link>
			</div>
		);
	}
})

module.exports = BookItem;