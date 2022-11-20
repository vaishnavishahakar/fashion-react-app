
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/homepage.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
    <Router>
    <Navbar/>
    {/* <HomePage/> */}
    <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
    </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
