import React from 'react'

export default function Checkout ({ children }) {
  return (
    <section
      className='checkout__page'
    >
      <button
        style={{
          cursor: 'pointer',
          border: 'none',
          marginBottom: '50px',
          backgroundColor: 'transparent'
        }}
        className='go-back'
      >
        Go back
      </button>
      <div className='summary-forms__container'>
        {children}
      </div>
    </section>
  )
}
