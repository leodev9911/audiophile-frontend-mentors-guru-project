import { React } from 'react'
import './CartEmptyModal.css'

export default function CartEmptyModal ({ setCartIsActive }) {
  const handleShowCart = () => {
    setCartIsActive(prevCartActive => !prevCartActive)
  }

  return (
    <section className='cart-empty-modal'>
      <p>the cart is empty</p>
      <button
        onClick={handleShowCart}
        className='first-section-link'
      >
        Close Cart
      </button>
    </section>
  )
}
