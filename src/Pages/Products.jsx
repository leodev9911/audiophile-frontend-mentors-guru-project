import React from 'react'
import ProductsCards from '../components/ProductsCards'
import ProductsLinks from '../components/ProductsLinks'

export default function Products () {
  return (
    <section
      className='products__container'
      style={{
        padding: '100px 0px 0px 0px'
      }}
    >
      <ProductsCards />
      <ProductsLinks />
    </section>
  )
}
