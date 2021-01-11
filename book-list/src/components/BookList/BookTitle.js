import React from 'react'

class BookTitle extends React.Component {
    render() {
        return (
            <div className='book-title'>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default BookTitle