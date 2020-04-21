import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile'
import Favorites from './components/Favorites'
import Home from './components/Home'
import './App.css'
//import axios from 'axios'

export default class App extends Component {
constructor(props){
  super(props);
    this.state={
      user:[
      {
        id: 1,
        username: "brian",
        password: "abc123",
        profilepic: "",
        online:false
      },
      {
        id: 2,
        username: "sabrina",
        password: "123abc",
        profilepic: "",
        online:false
      },
      {
        id: 3,
        username: "palma",
        password: "809",
        profilepic: "",
        online:false
      }
    ]
  }
}

// componentDidMount(){
//   axios.get("http://my-json-server.typicode.com/briandepalmas/photoapp/db")
//   .then(response => {this.setState({userInfo:response.data})
//      console.log(this.state.userInfo)
//    })
//    .catch(error => {
//      console.log('there is an error', error)
//    })
//   }
  
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
     
  loggedIn =(username,password)=>{
    this.setState({
      user: this.state.user.map(user => {
        if(user.username===username&&user.password===password){
          console.log("you are online")
          user.online=!user.online
          return user;
        }else{
          console.log("wrong password try again")
        }
        
      })
    })
  }



  render() {
// this.state.user.map((user) => 
// console.log(user.id)

// )

    return (
      <Router>
         <div>
           {/* how to pass function as prop without rendering component? */}
           {/* <Login log={this.loggedIn}/> */}
          <nav>
            <h1>
              <Link to="/login">Login </Link>
              <Link to="/home">Home </Link>
              <Link to="/profile">Profile </Link>
              <Link to="/favorites">Favorites</Link>
            </h1>
           
          </nav>

        <Switch>
         <Route exact path="/login" component={Login} />
         {/* <Route exact path="/home" component={Home} /> */}
         <Route exact path="/profile" component={Profile} />
         {/* <Route exact path="/favorites" component={Favorites} /> */}
        </Switch>
         </div>
      </Router>  
       
    )
  }
}

