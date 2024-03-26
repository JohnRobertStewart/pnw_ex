import React from 'react';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./pages/products";
import Info from "./pages/info";
import Contact from "./pages/contact";

import './App.css';

function App() {
  return (
    <Router>
            <Navbar />
            <Routes>              
                <Route 
                    path="/info" 
                    element={<Info />} />
                <Route
                    path="/contact"
                    element={<Contact />}/>
                <Route 
                  path="/products" 
                  element={<Products />} />
            </Routes>
      
    <div className="App">
      <header className="App-header">
        <img src={require('./logo192.png')} className="App-logo" alt="logo" />
        <p>
          Wow, that is a really, REALLY, basic website.
          But hey, it's a technically functional website made in two hours on a tuesday morning.
        </p>
      </header>
    </div>
    </Router>
  );
}

export default App;
