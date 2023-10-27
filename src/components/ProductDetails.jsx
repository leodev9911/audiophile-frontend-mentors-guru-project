import React from 'react'
import { useImages } from '../assets/images'
import './ProductDetails.css'
import { Link, useLocation } from 'react-router-dom'

export default function ProductDetails () {
  const { productsGallery } = useImages()
  const location = useLocation()
  const {
    name,
    description,
    price,
    features,
    includes,
    slug
  } = location.state.product1
  const { img } = location.state
  const { beforeLocation } = location.state

  return (
    <>
      <Link
        to={beforeLocation}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          border: 'none',
          marginBottom: '50px',
          backgroundColor: 'transparent',
          textDecoration: 'none',
          fontSize: '1.5rem',
          color: 'gray'
        }}
        className='go-back'
      >
        Go back
      </Link>
      <section>
        <div className='product-details-info'>
          <img src={`..${img}`} alt='Product image' />
          <div className='product-details-description'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <div className='product-details-buttons'>
              <div className='product-details-buttons-plus-minus'>
                <div className='operator'>-</div>
                <div className='quantity'>3</div>
                <div className='operator'>+</div>
              </div>
              <button className='add-to-cart-button'>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className='product-details-features'>
          <div>
            <h3>FEATURES</h3>
            <p>{features}</p>
          </div>
          <div>
            <h3>IN THE BOX</h3>
            <p><span>{includes[0].quantity}</span>{includes[0].item}</p>
            <p><span>{includes[1].quantity}</span>{includes[0].item}</p>
            <p><span>{includes[2].quantity}</span>{includes[0].item}</p>
            <p><span>{includes[3].quantity}</span>{includes[0].item}</p>
          </div>
        </div>
        <div className='product-details-images'>
          <img src={`..${productsGallery[slug][0]}`} alt='Gallery image' />
          <img src={`..${productsGallery[slug][1]}`} alt='Gallery image' />
          <img src={`..${productsGallery[slug][2]}`} alt='Gallery image' />
        </div>
      </section>
    </>
  )
}
