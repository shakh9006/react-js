import React from 'react'

class BookIndex extends React.Component {
    render() {
        return (
            <>
                <span className="book-index">
                    #{this.props.index}
                </span>
            </>
        )
    }
}

export default BookIndex