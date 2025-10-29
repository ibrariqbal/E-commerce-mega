import React from 'react'
 import './App.css'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home/Home'

function App() {
 
  return (
    <>
    <Router>
       <Header/>
       <Routes>
       </Routes>
       <Home/>
    </Router>
    
    </>
  )
}

export default App
