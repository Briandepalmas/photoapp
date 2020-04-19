import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'

export default class App extends Component {
constructor(props){
  super(props);
    this.state={
      data:[]
    }
}

componentDidMount(){
  axios.get("http://my-json-server.typicode.com/briandepalmas/photoapp/db")
  .then(response => {this.setState({data:response.data.user})
     console.log(this.state.data[0].name)
   })
   .catch(error => {
     console.log('there is an error', error)
   })
 
   //add user
   addUser(){}

 
  }



  render() {
    return (
      <Router>
         <div>
          <nav>
           <Link to="/signup">SIGN UP </Link>
           <Link to="/home">Home </Link>
           <Link to="/profile">Profile </Link>
           <Link to="/favorites">Favorites</Link>
          </nav>
        </div>
      </Router>  
       
    )
  }
}

