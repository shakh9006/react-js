import React from 'react'

class BookHeader extends React.Component {
    render() {
        return (
            <div className="book-header">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default BookHeader