import React from 'react'
import { useImages } from '../assets/images'
import headphonesGallery1 from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import headphonesGallery2 from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import headphonesGallery3 from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import './ProductDetails.css'

export default function ProductDetails () {
  const { speakerZX9 } = useImages()

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
            <h2>XX59 HEADPHONES</h2>
            <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet   durable versatile wireless headset is a brilliant companion at home or on the move.</p>
            <p>$899</p>
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
            <p>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
          </div>
          <div>
            <h3>IN THE BOX</h3>
            <p><span>1x</span>Headphone unit</p>
            <p><span>2x</span>Replacement earcups</p>
            <p><span>1x</span>User manual</p>
            <p><span>1x</span>3.5mm 5m audio cable</p>
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
