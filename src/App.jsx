import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'
import MHero from './components/MHero'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route
            path="*"
            element={<Navigate to="/mpfiy" replace />}
          />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
