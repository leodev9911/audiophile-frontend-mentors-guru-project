import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Home from '../Pages/Home'
import FirstSection from '../components/FirstSection'
import { useActualLocation } from '../hooks/useActualLocation'
import Products from '../Pages/Products'
import CartModal from '../components/CartModal'
import Modal from '../components/Modal/Modal'

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
          <Route path='/Products/:name' element={<Products />} />
        </Routes>
        <PromoSection />
      </main>
      <Footer />
      <div className='modal'>
        <CartModal />
      </div>
    </>
  )
}
