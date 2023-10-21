import { React } from 'react'
import './CartModal.css'
import { useImages } from '../assets/images'

export default function () {
  const { headphonesXX99One } = useImages()

  return (
    <section className='cart-modal'>
      <div className='cart'>
        <div className='cart-header'>
          <p>Cart (1)</p>
          <p>Remove all</p>
        </div>
        <div className='cart-product-card'>
          <div className='cart-left-section'>
            <img src={headphonesXX99One} alt="" />
            <div>
              <p className='cart-product-title'>YX1</p>
              <p className='cart-product-price'>$678.00</p>
            </div>
          </div>
          <div className='cart-right-section'>
            <div className='minus'>-</div>
            <div className='quiantity'>3</div>
            <div className='+'>+</div>
          </div>
        </div>
        <div className='cart-total-price'>
          <p>Total</p>
          <p>$9,4211</p>
        </div>
      </div>
      <button>
        Checkout
      </button>
    </section>
  )
}
