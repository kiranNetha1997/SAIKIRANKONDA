import React, { Component } from 'react'

export class WillUnMount extends Component {
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
      console.log("Component willunmount");
    }
  render() {
    return (
      <div>
           
           <h5>ComponentWillUnMount</h5>
           <p> The Component Will Delete</p>

      </div>
    )
  }
}

export default WillUnMount