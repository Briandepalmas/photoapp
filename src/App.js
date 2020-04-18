import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
constructor(props){
  super(props);
    this.state={
      data:[]
    }
}

componentDidMount(){
  let payload = {
    token: "MclNmUrYSrRhFAB7tNMsyg",
    data: {
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 5
    }
  };
  
  axios({
  method: "post",
  url: "https://app.fakejson.com/q",
  data: payload
  }).then(function(resp) {
  // Do something with fake data
  });
}


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

