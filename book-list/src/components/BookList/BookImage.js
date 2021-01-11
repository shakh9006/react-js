import React from 'react'
import BookIndex from './BookIndex'

class BookImage extends React.Component {
    render() {
        return (
            <>
                <div className='book-image-wrapper'>
                    <BookIndex index={this.props.index} />
                    <img src={this.props.src} alt='Here must be Book image'/>
                </div>
            </>
        )
    }
}

export default BookImage