import React, { Component } from 'react'

export class Login extends Component {
   
    state={
        username:"",
        password:""
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username)
        this.props.log(this.state.username);
        
        //resets username and password back to empty to receive new user input
        this.setState({ username: '',password:'' });
      }

    onChange = (event) => (this.setState({[event.target.name]: [event.target.value] }));

    render() {
        return (
            <div>
             <form onSubmit={this.onSubmit}></form>
                Create UserName: 
                <input type="text" name="username" placeholder="username" value={this.state.username}
                onChange={this.onChange}/>
            
                Create Password:
                <input type="text" name="password" placeholder="enter password" value={this.state.password}
                onChange={this.onChange}/>

                <input type="submit" ></input>
             <form/>
            </div>
        )
    }
}

export default Login


