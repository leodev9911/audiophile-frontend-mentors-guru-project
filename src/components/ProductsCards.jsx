import React from 'react'
import data from '../../data'
import './ProductsCards.css'
import { useImages } from '../assets/images'

export default function ProductsCards () {
  const { headphonesXX99Two } = useImages()
  return (
    <section className='products-section'>
      <div className='product'>
        <img
          src={headphonesXX99Two}
          alt=''
          className='product-img'
        />
        <div className='product-description'>
          <h3 className='description-new-product'>NEW PRODUCT</h3>
          <h3 className='description-title'>
            {data[0].name.toUpperCase()}
          </h3>
          <p className='product-description'>
            {data[0].description}
          </p>
          <a href='' className='first-section-link'>
            SEE PRODUCT
          </a>
        </div>
      </div>
      <div className='product'>
        <img src={headphonesXX99Two} alt='' />
        <div className='product-description'>
          <h3 className='description-new-product'>NEW PRODUCT</h3>
          <h3 className='description-title'>
            {data[0].name}
          </h3>
          <p className='product-description'>
            {data[0].description}
          </p>
          <a href='' className='first-section-link'>
            SEE PRODUCT
          </a>
        </div>
      </div>
    </section>
  )
}
