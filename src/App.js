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



 .then(response => {
     console.log(response.data)
   })

   .catch(error => {
     console.log('there is an error', error)
   })

 }


  render() {
    return (
      <Router>
         <div>
          <nav>
           <Link to="/">Home </Link>
           <Link to="/profile">Profile </Link>
           <Link to="/favorites">Favorites</Link>
          </nav>
        </div>
      </Router>  
       
    )
  }
}

