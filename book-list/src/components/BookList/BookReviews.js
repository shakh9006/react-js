import React from 'react'
class BookDetails extends React.Component {
    render() {
        const reviews = this.props.reviews
        return (
            <div className='book-reviews'>
                <p>{reviews} reviews</p>
            </div>
        )
    }
}

export default BookDetails