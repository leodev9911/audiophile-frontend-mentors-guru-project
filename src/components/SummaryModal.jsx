import { React, useContext } from 'react'
import checkIcon from '../assets/icons/check-icon.svg'
import './SummaryModal.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart'

export default function SummaryModal ({ setSummaryModal }) {
  const { cart, handleRemoveAll } = useContext(CartContext)
  const totalPrice = cart.reduce((acumulator, product) => acumulator + product.totalPrice, 0)
  const grandTotal = totalPrice + 99 + 95
  const toSummaryModal = () => {
    setSummaryModal(prevState => !prevState)
    handleRemoveAll()
  }

  return (
    <section className='summary-modal'>
      <img
        src={checkIcon}
        alt='Check icon'
      />
      <h3>THANK YOU FOR YOUR ORDER</h3>
      <p>You will receive an email confirmation shortly</p>
      <div className='summary__container'>
        <div className='sum-div'>
          <img src={cart[0].importImage} alt='Product image' />
          <div className='sum-fraction-div'>
            <div className='sum-upper-div'>
              <h5>{cart[0].title}</h5>
              <p className='item-price-p'>${cart[0].totalPrice}</p>
              <p className='quantity-p'>x{cart[0].quantity}</p>
            </div>
            <div className='sum-bottom-div'>
              <p>and {cart.length} other item(s)</p>
            </div>
          </div>
        </div>
        <div className='sum-total-div'>
          <p>GRAND TOTAL</p>
          <h5>${grandTotal}</h5>
        </div>
      </div>
      <Link
        to='/'
        onClick={toSummaryModal}
      >
        Back to home
      </Link>
    </section>
  )
}
