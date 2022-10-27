import React from 'react';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import DetailsView from "./Components/details/DetailsView";
import {Box} from "@mui/material";
import DataProvider from './context/DataProvider';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <DataProvider>
      <Header/>
      <Box style={{marginTop:"54px"}}>
        <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product/:id" element={<DetailsView/>} />
      </Routes>
      </Box>
      </DataProvider>
     
  ); 
}

export default App;
