import { React } from 'react'
import './SummaryCheckout.css'
import { useImages } from '../assets/images'

export default function SummaryCheckout () {
  const { headphonesXX99One } = useImages()

  return (
    <section className='summary-checkout'>
      <h2>SUMMARY</h2>
      <div className='summary-products'>
        <img src={headphonesXX99One} alt='Product image' />
        <div className='text-section'>
          <p>YX1</p>
          <p>$599.00</p>
        </div>
        <p>x1</p>
      </div>
      <div className='prices-section'>
        <div>
          <p>TOTAL</p>
          <p>$9,599.00</p>
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
          <p>$9,599.00</p>
        </div>
      </div>
      <button>
        Checkout
      </button>
    </section>
  )
}
