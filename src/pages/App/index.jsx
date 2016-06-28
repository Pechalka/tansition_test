
const React = require('react');
const loadImages=require('utils/loadImages');

const { Link } = require('react-router');

import { Footer } from 'blocks/Footer/';
import { Header } from 'blocks/Header/';


require('./index.scss');

const App = React.createClass({
    render() {
        return (            	
            <Footer>
            	<Header />
            	<div className='container'>
	            	{this.props.children}
            	</div>
            </Footer>
		);
    },
});

module.exports = App;
