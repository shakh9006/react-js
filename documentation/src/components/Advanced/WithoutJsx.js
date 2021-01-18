import React from 'react'

class Greeting extends React.Component {
    render() {
        return React.createElement('div', null, `Hello, ${this.props.name}`)
    }
}

export default Greeting