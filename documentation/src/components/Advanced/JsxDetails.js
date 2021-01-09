import React from 'react'

export default class TextBlock extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>{this.props.text}</p>
            </React.Fragment>
        )
    }
}