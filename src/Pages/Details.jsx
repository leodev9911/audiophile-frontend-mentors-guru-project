import React from 'react'

export default function Details ({ children }) {
  return (
    <section
      className='products-detail-section'
      style={{
        paddingTop: '100px'
      }}
    >
      {children}
    </section>
  )
}
