import React, {createContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Component2 from './Component3'
import 'bootstrap/dist/css/bootstrap.min.css';




 export const useUrl = createContext();
 

function App() {
 const [teja,setTeja] = useState("");

  const [contact,setContact] = useState([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
        setContact(res.data)
        
      })
      .catch(err =>{
        
      })
    },[])
 
  return (
    <div>
      <useUrl.Provider value={contact}>
        <h1>Fetchinng the data and entering to componet 2</h1>
     <Component2/>
     </useUrl.Provider>
    </div>
  );
}

export default App;
