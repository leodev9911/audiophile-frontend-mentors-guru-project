import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Home from '../Pages/Home'
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
          <Route path='/' element={<Home />} />
        </Routes>
        <PromoSection />
      </main>
      <Footer />
    </>
  )
}
