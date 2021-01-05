import React from 'react'
// 1. Conditional Rendering
// ***************************************
function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function GuestGreeting() {
    return <h1>Please Sign up.</h1>
}

function Greeting({loggedIn}) {
    let template = <GuestGreeting/>
    if (loggedIn) template = <UserGreeting/>
    return template
}
// ***************************************

// 2. Conditional Rendering
// ***************************************

class LogoutButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogoutClick = props.handleLogoutClick
    }

    render() {
        return  <button onClick={() => this.handleLogoutClick()}>Logout</button>
    }
}

class LoginButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleLoginClick = props.handleLoginClick
    }

    render(props) {
        return  <button onClick={() => this.handleLoginClick()}>Login</button>
    }
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.handleLoginClick  = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        return (
            <div>
                <Greeting loggedIn={isLoggedIn} />
                {
                    isLoggedIn
                        ? ( <LogoutButton handleLogoutClick={this.handleLogoutClick} /> )
                        : ( <LoginButton handleLoginClick={this.handleLoginClick}/> )
                }
            </div>
    )
    }
}
// ***************************************


export default LoginControl