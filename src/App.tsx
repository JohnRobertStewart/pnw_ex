import React from 'react';
import {Navbar} from "./components/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import   {GlobalStyles}  from './global';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <div>
        <h1>Hello. that is all.</h1>
        <img src="./public/:p.jpeg" alt="burger icon" />
        <small>Icon made by Freepik from www.flaticon.com</small>
      </div>
    </>
    <Router>
            <Navbar />
            <Routes>              
                <Route 
                    path="/compontents/Burger" 
                    element={<Burger />} />
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
