import React from 'react'
import BookImage from './BookImage'
import BookInfo from './BookInfo'

class BookItem extends React.Component {
    render() {
        const book  = this.props.book
        const {src, id, ...info} = book
        return (
            <>
                <div className='book-item'>
                    <BookImage src={src} index={id} />
                    <BookInfo {...info} />
                </div>
            </>
        )
    }
}

export default BookItem