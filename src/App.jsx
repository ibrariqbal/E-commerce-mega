import React from 'react'
 import './App.css'
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function App() {
 
  return (
    <>
    <Router>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addtocart' element={<Cart/>}/>
       </Routes>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </Router>
    
    
    </>
  )
}

export default App
