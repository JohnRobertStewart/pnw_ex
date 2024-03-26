import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo192.png')} className="App-logo" alt="logo" />
        <p>
          Wow, that is a really, REALLY, basic website.
          But technically, it is a website. 
        </p>
      </header>
    </div>
  );
}

export default App;
