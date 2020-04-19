import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <form>
                Create UserName: 
                <input type="text" name="username" placeholder="username"></input>
                Create Password:
                <input type="text" name="username" placeholder="enter password"></input>
            </form>
        )
    }
}

export default Signup
