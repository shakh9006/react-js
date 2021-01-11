import React from 'react'
import BookHeader from './BookHeader'
import BookContent from "./BookContent";


class BookList extends React.Component {

    render() {
        const {title, books} = this.props
        return (
            <div className='book-container'>
                <BookHeader title={title} />
                <BookContent books={books} />
            </div>
        )
    }
}

export default BookList