import React from 'react'
import ProductsLinks from '../components/ProductsLinks'
import HomeSection from '../components/HomeSection'

export default function Home () {
  return (
    <section
      style={{
        padding: '120px 0px 0px 0px'
      }}
    >
      <ProductsLinks />
      <HomeSection />
    </section>
  )
}
