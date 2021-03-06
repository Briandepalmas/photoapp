import React, { Component } from 'react'

export class Signup extends Component {
//component state not being share as props
    state={
             username:"",
             password:""    
    }
   
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username)
        this.props.addUser(this.state.username, this.state.password);
        
        //resets username and password back to empty to receive new user input
        this.setState({ username: '',password:'' });
      }

      //targets name of input forms username and password and 
    onChange = (event) => ({[event.target.name]: event.target.value });
   // this.setState({user:{[event.target.name]: event.target.value ,}})
    // ({ user:{[event.target.name]: event.target.value }});
    
    render() {
        return (
           
            <form onSubmit={this.onSubmit}>
                Create UserName: 
                <input type="text" name="username" placeholder="username" value={this.state.username}
                onChange={this.onChange}/>
            
                Create Password:
                <input type="text" name="password" placeholder="enter password" value={this.state.password}
                onChange={this.onChange}/>
                
                <input type="submit" ></input>
            </form>
        )
    }
}

export default Signup
