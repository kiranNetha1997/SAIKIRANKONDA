import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/movie/:imdbID" element={MovieDetails} />
        <Route element={PageNotFound} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
