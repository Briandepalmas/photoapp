import React, { Component } from 'react'

export class Signup extends Component {
//component state not being share as props
    state={
        username:"",
        password:''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.Signup(this.state.username);
        this.props.Signup(this.state.password)
        this.setState({ username: '',password:'' });
      }

      //targets name of input forms username and password
    onChange = (event) => this.setState({ [event.target.name]: event.target.value });
    render() {
        return (
            <form>
                Create UserName: 
                <input type="text" name="username" placeholder="username" value={this.state.username}
                onChange={this.onChange}/>
            
                Create Password:
                <input type="text" name="password" placeholder="enter password" value={this.state.password}></input>
                <input type="submit" value="submit"></input>
            </form>
        )
    }
}

export default Signup
