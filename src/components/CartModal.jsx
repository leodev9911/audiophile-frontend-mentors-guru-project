import { React } from 'react'
import './CartModal.css'
import { useImages } from '../assets/images'
import closeIcon from '../assets/icons/icon-close.svg'

export default function () {
  const { headphonesXX99One } = useImages()

  return (
    <section className='cart-modal'>
      <div className='cart'>
        <div className='cart-header'>
          <p className='cart-total-quantity'>
            Cart (1)
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
          />
        </div>
        <div className='product-card__container'>
          <div className='cart-product-card'>
            <div className='cart-left-section'>
              <img
                src={headphonesXX99One}
                alt=''
                className='prouct-img'
              />
              <div>
                <p className='cart-product-title'>YX1</p>
                <p className='cart-product-price'>$678.00</p>
              </div>
            </div>
            <div className='cart-right-section'>
              <div className='operator'>-</div>
              <div className='quantity'>3</div>
              <div className='operator'>+</div>
            </div>
          </div>
          <div className='cart-product-card'>
            <div className='cart-left-section'>
              <img
                src={headphonesXX99One}
                alt=''
                className='prouct-img'
              />
              <div>
                <p className='cart-product-title'>YX1</p>
                <p className='cart-product-price'>$678.00</p>
              </div>
            </div>
            <div className='cart-right-section'>
              <div className='operator'>-</div>
              <div className='quantity'>3</div>
              <div className='operator'>+</div>
            </div>
          </div>
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
