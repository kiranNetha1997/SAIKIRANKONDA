import React, { useState, createContext } from 'react';
import './styles.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from "./Nav";
import Register from './Register';
import LogIn from './LogIn';
import MyProfile from './MyProfile';

export const store = createContext();
function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>


        <Nav />

        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<LogIn />} />
          <Route path='myprofile' element={<MyProfile />} />
        </Routes>
      </store.Provider>
    </div>
  );
}

export default App;
