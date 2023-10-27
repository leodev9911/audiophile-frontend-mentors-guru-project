import React from 'react'
import { useImages } from '../assets/images'
import headphonesGallery1 from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import headphonesGallery2 from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import headphonesGallery3 from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import './ProductDetails.css'
import { useLocation } from 'react-router-dom'

export default function ProductDetails () {
  const { speakerZX9 } = useImages()
  const location = useLocation()
  const {
    name,
    description,
    price,
    features,
    includes
  } = location.state.product

  return (
    <>
      <button
        style={{
          cursor: 'pointer',
          border: 'none',
          marginBottom: '50px',
          backgroundColor: 'transparent',
          fontSize: '1.5rem'
        }}
        className='go-back'
      >
        Go back
      </button>
      <section>
        <div className='product-details-info'>
          <img src={speakerZX9} alt='Product image' />
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
            <p><span>{includes[1].quantity}</span>{includes[1].item}</p>
            <p><span>{includes[2].quantity}</span>{includes[2].item}</p>
            <p><span>{includes[3].quantity}</span>{includes[3].item}</p>
          </div>
        </div>
        <div className='product-details-images'>
          <img src={headphonesGallery1} alt='Gallery image' />
          <img src={headphonesGallery2} alt='Gallery image' />
          <img src={headphonesGallery3} alt='Gallery image' />
        </div>
      </section>
    </>
  )
}
