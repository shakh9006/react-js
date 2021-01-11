import React from 'react'
import BookTitle from './BookTitle'
import BookAuthor from './BookAuthor'
import BookReviews from './BookReviews'
import BookPrice from './BookPrice'

class BookInfo extends React.Component {
    render() {
        const {title, author, reviews, price} = this.props
        return (
            <div className='book-info-container'>
                <BookTitle title={title} />
                <BookAuthor author={author} />
                <BookReviews reviews={reviews} />
                <BookPrice price={price} />
            </div>
        )
    }
}

export default BookInfo