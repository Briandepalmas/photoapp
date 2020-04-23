import React, { Component } from 'react'
// import './App.css'

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
             <form className="forms" onSubmit={this.onSubmit}></form>
                <h3 id="abc">Enter UserName: </h3>
                <input type="text" name="username" placeholder="username" value={this.state.username}
                onChange={this.onChange}/>
            
                <h3>Enter Password:</h3>
                <input type="text" name="password" placeholder="enter password" value={this.state.password}
                onChange={this.onChange}/>
                
                <input id="submit" type="submit" ></input>
             <form/>
            </div>
        )
    }
}

export default Login


