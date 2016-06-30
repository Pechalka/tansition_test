
const React = require('react');


require('./index.scss');

var books = [];

for(var i =0; i < 20; i++) {
	books.push({
		id: i,
		title : 'book ' + i + 1
	});
}

const BookItem = require('blocks/BookItem/');


const BookList = React.createClass({
	render() {
		return <div className='book-list'>
			{this.props.books.map(book => <BookItem book={book} />)}
		</div>
	}
})

const Home = React.createClass({
    render() {
        return (     
        	<div>
        		<BookList books={books}/>
        	</div>
		);
    },
});

module.exports = Home;
