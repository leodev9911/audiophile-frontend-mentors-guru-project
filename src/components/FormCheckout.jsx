import { React } from 'react'
import cashIcon from '../assets/icons/cash-icon.svg'
import './FormCheckout.css'

export default function FormCheckout () {
  return (
    <section className='checkout-form'>
      <h2>CHECKOUT</h2>
      <div className='billing-details'>
        <h3>BILLING DETAILS</h3>
        <div className='input-div'>
          <label
            htmlFor='Name'
          >
            Name
          </label>
          <input
            type='text'
            id='Name'
            placeholder='Leonardo Fernández'
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Email'
          >
            Email
          </label>
          <input
            type='text'
            id='Email'
            placeholder='leonardo99112821385@gmail.com'
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Phone'
          >
            Phone Number
          </label>
          <input
            type='text'
            id='Phone'
            placeholder='+53 52592682'
          />
        </div>
      </div>
      <div className='shipping-info'>
        <h3>SHIPPING INFO</h3>
        <div className='input-div address'>
          <label
            htmlFor='Address'
          >
            Your Address
          </label>
          <input
            type='text'
            id='Address'
            placeholder='1137 Williams avenue'
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='ZIP-code'
          >
            ZIP code
          </label>
          <input
            type='text'
            id='ZIP-code'
            placeholder='10001'
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='City'
          >
            City
          </label>
          <input
            type='text'
            id='City'
            placeholder='New York'
          />
        </div>
        <div className='input-div'>
          <label
            htmlFor='Country'
          >
            Country
          </label>
          <input
            type='text'
            id='Country'
            placeholder='USA'
          />
        </div>
      </div>
      <div className='payment-details'>
        <h3>PAYMENT DETAILS</h3>
        <p>Payment Method</p>
        <div className='payment-inputs'>
          <label
            className='checkbox'
            htmlFor='e-money'
          >
            <input
              type='radio'
              id='e-money'
            />
            <p>e-Money</p>
          </label>
          <label
            className='checkbox'
            htmlFor='cash'
          >
            <input
              type='radio'
              id='cash'
            />
            <p>Cash on delivery</p>
          </label>
        </div>
      </div>
      <div className='info-div'>
        <img src={cashIcon} alt='Cash icon' />
        <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled</p>
      </div>
    </section>
  )
}
