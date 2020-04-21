import React, { Component } from 'react'

export default class Profile extends Component {

    render() {
        return (
            <div>
                <div className="profilepic">
                  <div id="ppic"></div>
                  <div>
                      <h1>USERNAME</h1>
                  </div>
                </div>
                <div className="grid">
                  <div className="item"> 1</div>
                  <div className="item"> 2</div>
                  <div className="item"> 3</div>
                </div>
                
            </div>
        )
    }
}
