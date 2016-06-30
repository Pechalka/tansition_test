
const React = require('react');


require('./index.scss');

import { Link } from 'react-router';

const DetailsFilter = React.createClass({
	render() {
		return (
			<div className='details-filter'>
				<div className='details-filter__back'>
					<Link to='/'>Back</Link>
				</div>
				<div className='details-filter__filter'>
					Filter
				</div>
			</div>
		);
	}
})

module.exports = DetailsFilter;