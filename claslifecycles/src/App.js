import React from 'react';
import Styled from './App.css';
import DidMount from './Lifecycles/DidMount';
import DidUpdate from './Lifecycles/DidUpdate';
import WillUnMount from './Lifecycles/WillUnMount';
import Test from './Lifecycles/Test';


function App() {
  return (
    <div className='app'>
     <DidMount/>
     <DidUpdate/>
     
      <Test/> 
     
    </div>
  )
}

export default App