import { React, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Home from '../Pages/Home'
import FirstSection from '../components/FirstSection'
import { useActualLocation } from '../hooks/useActualLocation'
import Products from '../Pages/Products'
import Checkout from '../Pages/Checkout'
import ProductsLinks from '../components/ProductsLinks'
import HomeSection from '../components/HomeSection'
import ProductsCards from '../components/ProductsCards'
import FormCheckout from '../components/FormCheckout'
import SummaryCheckout from '../components/SummaryCheckout'
import data from '../../data.json'
import { useImages } from '../assets/images'
import ProductDetails from '../components/ProductDetails'
import Details from '../Pages/Details'
// import SummaryModal from '../components/SummaryModal'
// import CartModal from '../components/CartModal'
// import CartEmptyModal from '../components/CartEmptyModal'

export default function App () {
  const { actualLocation } = useActualLocation()
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (actualLocation === '/Products/Headphones') {
      setCategory('headphones')
    } else if (actualLocation === '/Products/Earphones') {
      setCategory('earphones')
    }
    if (actualLocation === '/Products/Speakers') {
      setCategory('speakers')
    }
  }, [actualLocation])

  const {
    headphonesXX99Two,
    headphonesXX99One,
    headphonesXX59,
    speakerZX7,
    speakerZX9,
    earphonesYX1
  } = useImages()
  const imgProduct = {
    headphones: [headphonesXX59, headphonesXX99One, headphonesXX99Two],
    speakers: [speakerZX7, speakerZX9],
    earphones: [earphonesYX1]
  }

  const productsToShow = data.filter(product => product.category === category)
  let n = -1

  return (
    <>
      <header>
        <Header />
        {actualLocation === '/' && <FirstSection />}
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Home>
                <ProductsLinks />
                <HomeSection />
              </Home>
            }
          />
          <Route
            path='/Products/:name'
            element={
              <section
                className='products__container'
                style={{
                  padding: '100px 0px 0px 0px'
                }}
              >
                <Products>
                  {productsToShow.map(product => {
                    n++
                    return (
                      <ProductsCards
                        thumbnail={imgProduct[category][n]}
                        key={product.id}
                        title={product.name}
                        description={product.description}
                        product={product}
                      />
                    )
                  })}
                  <ProductsLinks />
                </Products>
              </section>
            }
          />
          <Route
            path='/Checkout'
            element={
              <Checkout>
                <FormCheckout />
                <SummaryCheckout />
              </Checkout>
            }
          />
          <Route
            path='/Details/:name'
            element={
              <Details>
                <ProductDetails />
              </Details>
            }
          />
        </Routes>
        {actualLocation !== '/Checkout' && <PromoSection />}
      </main>
      <Footer />
      {/* <div className='modal'>
        <CartModal />
        <CartEmptyModal />
        <SummaryModal />
      </div> */}
    </>
  )
}
