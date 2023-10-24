import { React } from 'react'
import './FormCheckout.css'

export default function FormCheckout () {
  return (
    <section className='checkout-form'>
      <h2>CHECKOUT</h2>
      <div className='billing-details'>
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
    </section>
  )
}
