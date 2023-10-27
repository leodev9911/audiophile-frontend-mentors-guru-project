import React from 'react'
import './ProductsCards.css'
import { Link, useLocation } from 'react-router-dom'

export default function ProductsCards ({ title, description, thumbnail, product }) {
  const productLocation = useLocation()

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
        <p className='product-description-p'>
          {description}
        </p>
        <Link
          to={`/Details/:${product.slug}`}
          state={{
            product1: product,
            img: thumbnail,
            beforeLocation: productLocation.pathname
          }}
          className='first-section-link'
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  )
}
