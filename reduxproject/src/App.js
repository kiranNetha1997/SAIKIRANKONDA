import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import ProductComponent from "./Components/ProductComponent";
import ProductListing from "./Components/ProductListing";
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductComponent />
      <ProductDetails />
      <ProductListing />
      {/* <Router>
        <Header />
        <Routes>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetails} />
          <Route path='/componet' exact component={ProductComponent} />
          <Route>404 not found</Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
