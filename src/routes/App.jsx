import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App () {
  return (
    <>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path='/' element={<p>Root</p>} />
        <Route path='/other' element={<p>other</p>} />
      </Routes>
      <Footer />
    </>
  )
}
