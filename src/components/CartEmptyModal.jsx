import { React } from 'react'
import './CartEmptyModal.css'

export default function CartEmptyModal () {
  return (
    <section className='cart-empty-modal'>
      <p>the cart is empty</p>
      <button href='' className='first-section-link'>
        Close Cart
      </button>
    </section>
  )
}
