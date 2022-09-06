import logo from './logo.svg';
import React from "react";
import './App.css';
import Item1 from "./pages/Item1.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      
    <Router>
      
    
      <Routes>
        <Route path="/" element={<Item1/>} />
      
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
