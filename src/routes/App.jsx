import { React, useContext, useEffect, useState } from 'react'
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
import data from '../../data'
import { useImages } from '../assets/images'
import ProductDetails from '../components/ProductDetails'
import Details from '../Pages/Details'
import SummaryModal from '../components/SummaryModal'
import CartModal from '../components/CartModal'
import { CartContext } from '../context/cart'
import CartEmptyModal from '../components/CartEmptyModal'

export default function App () {
  const { actualLocation } = useActualLocation()
  const [category, setCategory] = useState('')
  const [cartIsActive, setCartIsActive] = useState(false)
  const [summaryModal, setSummaryModal] = useState(false)
  const { cart } = useContext(CartContext)

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
    imgProduct
  } = useImages()

  const productsToShow = data.filter(product => product.category === category)
  let n = -1

  return (
    <>
      <header>
        <Header setCartIsActive={setCartIsActive} />
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
                <SummaryCheckout setSummaryModal={setSummaryModal} />
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
      {(cartIsActive || summaryModal) &&
        <div className='modal'>
          {(cart.length > 0 && !summaryModal) && <CartModal setCartIsActive={setCartIsActive} />}
          {cart.length === 0 && <CartEmptyModal setCartIsActive={setCartIsActive} />}
          {summaryModal && <SummaryModal setSummaryModal={setSummaryModal} />}
        </div>}
    </>
  )
}
