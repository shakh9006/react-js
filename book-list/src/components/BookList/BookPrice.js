import React from 'react'
class BookPrice extends React.Component {
    render() {
        const price = this.props.price
        return (
            <div className='book-price'>
                <p>Price: ${price}</p>
            </div>
        )
    }
}

export default BookPrice