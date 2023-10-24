import React from 'react'
import FormCheckout from '../components/FormCheckout'
import SummaryCheckout from '../components/SummaryCheckout'

export default function Checkout () {
  return (
    <section
      className='checkout__page'
    >
      <button
        style={{
          cursor: 'pointer',
          border: 'none',
          marginBottom: '50px'
        }}
        className='go-back'
      >
        Go back
      </button>
      <div className='summary-forms__container'>
        <FormCheckout />
        <SummaryCheckout />
      </div>
    </section>
  )
}
