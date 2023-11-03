import { React, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Home from '../Pages/Home'
import FirstSection from '../components/FirstSection'
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
import { useCategory } from '../hooks/useCategory'

export default function App () {
  const [cartIsActive, setCartIsActive] = useState(false)
  const { cart } = useContext(CartContext)
  const [summaryModal, setSummaryModal] = useState(false)
  const { actualLocation, category } = useCategory()
  const {
    imgProduct
  } = useImages()

  const productsToShow = data.filter(product => product.category === category)
  let n = -1

  const speakerZX9P = {
    product: data[5],
    thumbnail: imgProduct.speakers[1],
    beforeLocation: '/'
  }
  const speakerZX7P = {
    product: data[4],
    thumbnail: imgProduct.speakers[0],
    beforeLocation: '/'
  }
  const earphoneYX1P = {
    product: data[0],
    thumbnail: imgProduct.earphones[0],
    beforeLocation: '/'
  }

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
                <HomeSection
                  speakerZX9P={speakerZX9P}
                  speakerZX7P={speakerZX7P}
                  earphoneYX1P={earphoneYX1P}
                />
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
