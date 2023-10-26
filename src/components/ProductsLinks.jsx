import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/Products/Headphones'>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </Link>
      </div>
      <div className='product-container speaker'>
        <img src={speakers} alt='Speakers' />
        <h3>SPEAKERS</h3>
        <Link to='/Products/Speakers'>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </Link>
      </div>
      <div className='product-container earphone'>
        <img src={earphones} alt='Earphones' />
        <h3>EARPHONES</h3>
        <Link to='/Products/Earphones'>
          <p>SHOP</p>
          <img src={arrowRight} alt='Arrow right' />
        </Link>
      </div>
    </section>
  )
}
