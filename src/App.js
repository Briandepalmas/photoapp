import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Signup from './components/Signup'
import Profile from './components/Profile'
import Favorites from './components/Favorites'
import Home from './components/Home'
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
  //  addUser(){}

 
   }



  render() {
    return (
      <Router>
         <div>
           <Signup/>
          <nav>
           <Link to="/signup">SIGN UP </Link>
           <Link to="/home">Home </Link>
           <Link to="/profile">Profile </Link>
           <Link to="/favorites">Favorites</Link>
          </nav>

        <Switch>
         <Route exact path="/signup" component={Signup} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/profile" component={Profile} />
         <Route exact path="/favorites" component={Favorites} />
        </Switch>
         </div>
      </Router>  
       
    )
  }
}

