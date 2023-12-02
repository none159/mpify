import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'
import MHero from './components/MHero'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Contact from './components/Contact'
import Faq from './components/Faq'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/mpify' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Redirect from="*" to="/mpify" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
