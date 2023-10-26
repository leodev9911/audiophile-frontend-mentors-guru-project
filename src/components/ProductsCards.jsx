import React from 'react'
import './ProductsCards.css'
// import { useImages } from '../assets/images'

export default function ProductsCards ({ title, description, thumbnail }) {
  return (
    <div className='product'>
      <img
        src={`..${thumbnail}`}
        alt=''
        className='product-img'
      />
      <div className='product-description'>
        <h3 className='description-new-product'>NEW PRODUCT</h3>
        <h3 className='description-title'>
          {title}
        </h3>
        <p className='product-description'>
          {description}
        </p>
        <a href='' className='first-section-link'>
          SEE PRODUCT
        </a>
      </div>
    </div>
  )
}
