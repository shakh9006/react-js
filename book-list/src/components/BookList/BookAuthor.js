import React from 'react'

class BookAuthor extends React.Component {
    render() {
        return (
            <div className='book-author'>
                <p> <strong>Author: </strong> {this.props.author}</p>
            </div>
        )
    }
}

export default BookAuthor