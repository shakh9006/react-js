import React from 'react'

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse
        return (
            <img alt='#' src="https://vignette.wikia.nocookie.net/44-cats/images/d/da/Neko-44-cats-6.24.jpg/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/210/window-height/210?cb=20190819005945" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        )
    }
}

class Mouse extends React.Component {
    constructor(props){
        super(props)
        this.state = {x: 0, y: 0}
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
                {this.props.children(this.state)}
            </div>
        )
    }
}


class MouseTracker extends React.Component {

    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} children={mouse => (
                    <p>The current mouse position is ({mouse.x}, {mouse.y})</p>
                )} />
            </div>
        )
    }
}


export default MouseTracker