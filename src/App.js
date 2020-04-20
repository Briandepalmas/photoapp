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
      user:{
        "id": 1,
        "username": "Bret",
        "password": "abc123",
        "profilepic": "",
        "online":false
      }
    }
}

componentDidMount(){
  axios.get("http://my-json-server.typicode.com/briandepalmas/photoapp/db")
  .then(response => {this.setState({userInfo:response.data})
     console.log(this.state.userInfo)
   })
   .catch(error => {
     console.log('there is an error', error)
   })
  }
  

  //add user not functional
  //    addUser(username,password) { 
  //     //  console.log(username , password)
  //      axios.post("http://my-json-server.typicode.com/briandepalmas/photoapp/user", {
  //           username:username,
  //           password:password,
  //          "profilepic": "url",
  //          online: false
  //        })
  //        .then(response =>
  //         console.log(response.data)
  //         //  this.setState({userInfo: [...this.state.userInfo, response.data]})
  //         //  ,console.log("neww",this.state.userInfo)
  //        )
  //        .catch(error => {
  //    console.log('there is an error', error)
  //  })
     
  



  render() {
    return (
      <Router>
         <div>
           {/* how to pass function as prop without rendering component? */}
           {/* <Signup addUser={this.addUser}/> */}
          <nav>
           <Link to="/signup">SIGN UP </Link>
           <Link to="/home">Home </Link>
           <Link to="/profile">Profile </Link>
           <Link to="/favorites">Favorites</Link>
          </nav>

        <Switch>
         <Route exact path="/signup" component={Signup} />
         {/* <Route exact path="/home" component={Home} />
         <Route exact path="/profile" component={Profile} />
         <Route exact path="/favorites" component={Favorites} /> */}
        </Switch>
         </div>
      </Router>  
       
    )
  }
}

