import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert('Submitted Name: ' + this.state.value)
        event.preventDefault()
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'Please write an essay about your favorite DOM element.'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert('Submitted Essay: ' + this.state.value)
        event.preventDefault()
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value)
        event.preventDefault()
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor::
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit      = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        alert('is going: ' + this.state.isGoing)
        alert('number of persons: ' + this.state.numberOfGuests)
    }

    handleInputChange(event) {
        const target = event.target
        const value  = target.type === 'checkbox' ? target.checked : target.value
        const name   = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is going:
                    <input type="checkbox" onChange={this.handleInputChange} name="isGoing"  checked={this.state.isGoing} />
                </label>
                <br/>
                <label>
                    Number of guest:
                    <input type="number" name="numberOfGuests" onChange={this.handleInputChange} value={this.state.numberOfGuests}/>
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default Reservation
