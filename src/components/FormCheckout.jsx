import { React } from 'react'
import cashIcon from '../assets/icons/cash-icon.svg'
import './FormCheckout.css'
import { useForms } from '../hooks/useForms'

export default function FormCheckout () {
  const { formsInfo, handleChange } = useForms()

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
            name='name'
            onChange={handleChange}
            value={formsInfo.name}
            required
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
            name='email'
            onChange={handleChange}
            value={formsInfo.email}
            required
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
            name='phone'
            onChange={handleChange}
            value={formsInfo.phone}
            required
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
            name='address'
            onChange={handleChange}
            value={formsInfo.address}
            required
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
            name='zip'
            onChange={handleChange}
            value={formsInfo.zip}
            required
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
            name='city'
            onChange={handleChange}
            value={formsInfo.city}
            required
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
            name='country'
            onChange={handleChange}
            value={formsInfo.country}
            required
          />
        </div>
      </div>
      <div className='payment-details'>
        <h3>PAYMENT DETAILS</h3>
        <p>Payment Method</p>
        <div className='payment-inputs'>
          <label
            className={`checkbox ${formsInfo.payment === 'e-Money' && 'checked'}`}
            htmlFor='e-money'
          >
            <input
              type='radio'
              id='e-money'
              name='payment'
              value='e-Money'
              onChange={handleChange}
              required
            />
            <p>e-Money</p>
          </label>
          <label
            className={`checkbox ${formsInfo.payment === 'Cash' && 'checked'}`}
            htmlFor='cash'
          >
            <input
              type='radio'
              id='cash'
              name='payment'
              value='Cash'
              onChange={handleChange}
              required
            />
            <p>Cash on delivery</p>
          </label>
        </div>
      </div>
      <div className='info-div'>
        {formsInfo.payment === 'Cash' && <img src={cashIcon} alt='Cash icon' />}
        {formsInfo.payment === 'Cash' && <p>The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled</p>}
        {formsInfo.payment === 'e-Money' &&
          <div className='input-div'>
            <label
              htmlFor='E-money-number'
            >
              e-Money Number
            </label>
            <input
              type='text'
              id='E-money-number'
              placeholder='2342552421'
              name='eMoneyNumber'
              onChange={handleChange}
              value={formsInfo.eMoneyNumber}
              required
            />
          </div>}
        {formsInfo.payment === 'e-Money' &&
          <div className='input-div'>
            <label
              htmlFor='E-Money-pin'
            >
              e-Money PIN
            </label>
            <input
              type='text'
              id='E-Money-pin'
              placeholder='6891'
              name='eMoneyPin'
              onChange={handleChange}
              value={formsInfo.eMoneyPin}
              required
            />
          </div>}
      </div>
    </section>
  )
}
