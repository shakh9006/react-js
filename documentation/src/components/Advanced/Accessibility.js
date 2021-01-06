import React from 'react'

// 1. Programmatically managing focus
// ***************************************
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.focus = this.focus.bind(this)
        this.textInput = React.createRef()
    }

    focus() {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <Input inputRef={this.textInput} />
                <br/>
                <button onClick={this.focus}>
                    Set Focus
                </button>
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return (
            <input
                type="text"
                ref={this.props.inputRef}
            />
        )
    }
}

// ***************************************

export default CustomTextInput