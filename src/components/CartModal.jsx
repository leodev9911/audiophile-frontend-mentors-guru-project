import { React, useContext } from 'react'
import './CartModal.css'
import closeIcon from '../assets/icons/icon-close.svg'
import { CartContext } from '../context/cart'

export default function ({ setCartIsActive }) {
  const handleShowCart = () => {
    setCartIsActive(prevCartActive => !prevCartActive)
  }
  const { cart } = useContext(CartContext)

  return (
    <section className='cart-modal'>
      <div className='cart'>
        <div className='cart-header'>
          <p className='cart-total-quantity'>
            Cart ({cart.length})
          </p>
          <p
            className='cart-remove-button'
          >
            Remove all
          </p>
          <img
            src={closeIcon}
            alt='Close icon'
            className='product-close-icon'
            onClick={() => handleShowCart()}
          />
        </div>
        <div className='product-card__container'>
          {cart.map(product => {
            return (
              <div
                className='cart-product-card'
                key={product.id}
              >
                <div className='cart-left-section'>
                  <img
                    src={product.importImage}
                    alt={product.title}
                    className='prouct-img'
                  />
                  <div>
                    <p className='cart-product-title'>{product.title}</p>
                    <p className='cart-product-price'>${product.price}</p>
                  </div>
                </div>
                <div className='cart-right-section'>
                  <div className='operator'>-</div>
                  <div className='quantity'>{product.quantity}</div>
                  <div className='operator'>+</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='cart-lower-section'>
        <div className='cart-total-price'>
          <p>Total</p>
          <p>$9,4211</p>
        </div>
        <button>
          Checkout
        </button>
      </div>
    </section>
  )
}
