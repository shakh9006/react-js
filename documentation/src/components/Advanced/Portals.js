import React from 'react'
import ReactDOM from 'react-dom';
const modalRoot = document.querySelector('#modal-root')

const Child = () => {
    return (
        <div className='modal'>
            <button>Click me!</button>
        </div>
    )
}

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    componentDidMount() {
        modalRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state       = {clicks: 0}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(this.state.clicks)
        this.setState({
            clicks: this.state.clicks + 1
        })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Count: {this.state.clicks}</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}



export default Parent