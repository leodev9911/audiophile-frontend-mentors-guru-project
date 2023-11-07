import { React, useContext } from 'react'
import './SummaryCheckout.css'
import { CartContext } from '../context/cart'
import { FormsContext } from '../context/forms'

export default function SummaryCheckout ({ setSummaryModal }) {
  const { cart } = useContext(CartContext)
  const totalPrice = cart.reduce((acumulator, product) => acumulator + product.totalPrice, 0)
  const { setWasTried, allFormsValid } = useContext(FormsContext)

  const handleCheckoutButton = () => {
    if (allFormsValid === true) {
      setSummaryModal(prev => !prev)
    } else {
      setWasTried(true)
    }
  }

  const grandTotal = totalPrice + 99 + 95

  return (
    <section className='summary-checkout'>
      <h2>SUMMARY</h2>
      <section className='summary-product-section'>
        {cart.map(product => {
          return (
            <div
              className='summary-products'
              key={product.id}
            >
              <img src={product.importImage} alt='Product image' />
              <div className='text-section'>
                <p>{product.title}</p>
                <p>${product.totalPrice}</p>
              </div>
              <p>x{product.quantity}</p>
            </div>
          )
        })}
      </section>
      <div className='prices-section'>
        <div>
          <p>TOTAL</p>
          <p>${totalPrice}</p>
        </div>
        <div>
          <p>SHIPPING</p>
          <p>$99.00</p>
        </div>
        <div>
          <p>VAT (INCLUDED)</p>
          <p>$95.00</p>
        </div>
        <div>
          <p>GRAND TOTAL</p>
          <p>${grandTotal}</p>
        </div>
      </div>
      <button onClick={() => handleCheckoutButton()}>
        Checkout
      </button>
    </section>
  )
}
