import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout ({ children }) {
  return (
    <section
      className='checkout__page'
    >
      <Link
        to='/'
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          border: 'none',
          marginBottom: '50px',
          backgroundColor: 'transparent',
          color: 'black',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
        className='go-back'
      >
        Go back
      </Link>
      <div className='summary-forms__container'>
        {children}
      </div>
    </section>
  )
}
