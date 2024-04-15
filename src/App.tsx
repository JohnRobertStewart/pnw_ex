import React from 'react';
import Navbar from "./components/Navbar";
import Burger from "./components/Burger";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import   {GlobalStyles}  from './global';
import { theme } from './theme';
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
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <div>
        <h1>Hello. This is burger menu tutorial</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by Freepik from www.flaticon.com</small>
      </div>
    </>
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
          Wow, that's a website alright.
        </p>
      </header>
    </div>
    </Router>
    </ThemeProvider>

  );
}

export default App;
