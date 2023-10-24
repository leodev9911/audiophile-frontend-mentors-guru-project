import { React } from 'react'
import checkIcon from '../assets/icons/check-icon.svg'
import './SummaryModal.css'
import { useImages } from '../assets/images'

export default function SummaryModal () {
  const { headphonesXX99One } = useImages()

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
          <img src={headphonesXX99One} alt='Product image' />
          <div className='sum-fraction-div'>
            <div className='sum-upper-div'>
              <h5>YX1</h5>
              <p className='item-price-p'>$599.00</p>
              <p className='quantity-p'>x1</p>
            </div>
            <div className='sum-bottom-div'>
              <p>and 1 other item(s)</p>
            </div>
          </div>
        </div>
        <div className='sum-total-div'>
          <p>GRAND TOTAL</p>
          <h5>$11,568.80</h5>
        </div>
      </div>
      <button>
        Back to home
      </button>
    </section>
  )
}
