import React, { Component } from 'react'
import WillUnMount from './WillUnMount'
export class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: true
        }
    }
  render() {
    return (
      <div>
        {/* conditional rendering */}
        {
            this.state.active ? <WillUnMount/> : null
        }
        <button onClick={()=>this.setState({active:false})}>Delete</button>
      </div>
    )
  }
}

export default Test