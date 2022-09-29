import React from "react";
import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import Register from "./Register";
import Dashboard from "./Dashboard";
import MyProfile from "./MyProfile";
import IndProfile from "./IndProfile";
function App() {
  return (
    <div className="App">
  <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/login" element={ <LogIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/indprofile/:fullname/:email/:id" element={<IndProfile/>} />

  </Routes>
    </div> 
  );
}

export default App;
  