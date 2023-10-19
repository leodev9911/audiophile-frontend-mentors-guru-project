import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Home from '../Pages/Home'
import Headphones from '../Pages/Headphones'
import FirstSection from '../components/FirstSection'
import Speakers from '../Pages/Speakers'
import Earphones from '../Pages/Earphones'
import { useActualLocation } from '../hooks/useActualLocation'

export default function App () {
  const { actualLocation } = useActualLocation()

  return (
    <>
      <header>
        <Header />
        {actualLocation === '/' && <FirstSection />}
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Headphones' element={<Headphones />} />
          <Route path='/Speakers' element={<Speakers />} />
          <Route path='/Earphones' element={<Earphones />} />
        </Routes>
        <PromoSection />
      </main>
      <Footer />
    </>
  )
}
