import React from 'react'

// 1. Adding Lifecycle Methods to a Class
// ***************************************
class State extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.ID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        )
    }
}
// ***************************************


// 2. The Data Flows Down
// ***************************************
function FormattedDate(props) {
    return (
        <h2>Now {props.date.toLocaleTimeString()}</h2>
    )
}
// ***************************************

export default State