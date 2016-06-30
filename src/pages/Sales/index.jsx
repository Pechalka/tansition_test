
const React = require('react');


require('./index.scss');


const BookItem = require('blocks/BookItem/');
const DetailsFilter = require('blocks/DetailsFilter/');

var books = [];

for(var i =0; i < 20; i++) {
	books.push({
		id: i,
		title : 'book ' + i + 1
	});
}


const Sales = React.createClass({
    render() {
        return (     
        	<div>
        		<BookItem book={books[this.props.params.id]}/>
                <div className='diagrams'>
                </div>
        	</div>
		);
    },
});

module.exports = Sales;
