import React from 'react'
import BookItem from './BookItem'

class BookContent extends React.Component {
    render() {
        
        const books = this.props.books
        return (
            <div className='book-content'>
                {books.map(book => <BookItem book={book} key={book.id} />)}
            </div>
        )
    }
}

export default BookContent