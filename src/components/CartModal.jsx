import { React, useContext } from 'react'
import './CartModal.css'
import closeIcon from '../assets/icons/icon-close.svg'
import { CartContext } from '../context/cart'
import { Link, useLocation } from 'react-router-dom'

export default function ({ setCartIsActive }) {
  const handleShowCart = () => {
    setCartIsActive(prevCartActive => !prevCartActive)
  }
  const {
    cart,
    handleDeleteProductFromCart,
    handleAddToCart,
    handleRemoveAll
  } = useContext(CartContext)

  const productLocation = useLocation()
  const totalPrice = cart.reduce((acumulator, product) => acumulator + product.totalPrice, 0)

  return (
    <section className='cart-modal'>
      <div className='cart'>
        <div className='cart-header'>
          <p className='cart-total-quantity'>
            Cart ({cart.length})
          </p>
          <p
            className='cart-remove-button'
            onClick={() => handleRemoveAll()}
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
                    <p className='cart-product-price'>${product.totalPrice}</p>
                  </div>
                </div>
                <div className='cart-right-section'>
                  <div
                    className='operator'
                    onClick={() => handleDeleteProductFromCart(product)}
                  >
                    -
                  </div>
                  <div className='quantity'>{product.quantity}</div>
                  <div
                    className='operator'
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='cart-lower-section'>
        <div className='cart-total-price'>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
        <Link
          to='/Checkout'
          onClick={() => handleShowCart()}
          state={{
            beforeLocation: productLocation.pathname
          }}
        >
          Checkout
        </Link>
      </div>
    </section>
  )
}
