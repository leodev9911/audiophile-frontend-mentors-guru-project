import React from 'react'
import './ProductsLinks.css'
import arrowRight from '../assets/icons/icon-arrow-right.svg'
import headphones from '../assets/image-category-thumbnail-headphones.png'
import speakers from '../assets/image-category-thumbnail-speakers.png'
import earphones from '../assets/image-category-thumbnail-earphones.png'

export default function ProductsLinks () {
  return (
    <section className='products-links__container'>
      <div className='product-container headphones'>
        <img src={headphones} alt='Headphones' />
        <h3>HEADPHONES</h3>
        <a href=''>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </a>
      </div>
      <div className='product-container speaker'>
        <img src={speakers} alt='Speakers' />
        <h3>HEADPHONES</h3>
        <a href=''>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </a>
      </div>
      <div className='product-container earphone'>
        <img src={earphones} alt='Earphones' />
        <h3>HEADPHONES</h3>
        <a href=''>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </a>
      </div>
    </section>
  )
}
