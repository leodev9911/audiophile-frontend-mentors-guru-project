import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import FirstSection from '../components/FirstSection'

export default function App () {
  return (
    <>
      <header>
        <Header />
        <FirstSection />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<p>Root</p>} />
          <Route path='/other' element={<p>other</p>} />
        </Routes>
        <PromoSection />
      </main>
      <Footer />
    </>
  )
}
