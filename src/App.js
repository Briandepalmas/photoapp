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



   axios.get("http://my-json-server.typicode.com/briandepalmas/photoapp/db")



 .then(response => {
console.log(response.data)
 })

 .catch(error =>{
  console.log('there is an error', error)
})




//   let payload = {
//     token: "MclNmUrYSrRhFAB7tNMsyg",
//     data: {
//       name: "nameFirst",
//       email: "internetEmail",
//       phone: "phoneHome",
//       _repeat: 5
//     }
//   };
  
//   axios({
//   method: "post",
//   url: "https://app.fakejson.com/q",
//   data: payload
//   }).then(function(response) {
//   // Do something with fake data
// console.log("llll",response.data)
//   });
}


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

