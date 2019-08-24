import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

// ROUTES
import Header from './components/header'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return (
    <>
    <Header />

    <Router>
    <Projects />
    <About />
    <Contact />
    </Router>
    </>
  );
}

export default App;
