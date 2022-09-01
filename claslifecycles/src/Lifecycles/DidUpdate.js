import React, { Component } from 'react'
import styles from './Update.css';

export class DidUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Sai"
        }   
    }

    componentDidUpdate(){
        document.getElementById("status").innerHTML= "Name Updated"
        console.log("DidUpadated")
    }
  render() {
    return (
      <div className='main'> 
        <h3>DidUpdate</h3>
         <br/>

     <h3 className='name'>Name : {this.state.name}</h3>
     <p id="status">{}</p>
        <button onClick={()=>this.setState({name:"Kiran"})}>
            DidUpdateName
        </button>
     

      </div>
    )
  }
}

export default DidUpdate