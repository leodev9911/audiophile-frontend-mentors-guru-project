import React from 'react'
import './HomeSection.css'
import speakerZX9 from '../assets/product-zx9-speaker/desktop/image-speaker-zx9.14ec07a6.png'
import earphone from '../assets/home/desktop/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'

export default function HomeSection ({ speakerZX9P, speakerZX7P, earphoneYX1P }) {
  return (
    <section className='home-section'>
      <div className='speaker-container'>
        <div className='transparent-div' />
        <img
          src={speakerZX9}
          alt='Speaker ZX9'
          className='speakerZx9'
        />
        <div className='speaker-text__cotainer'>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound</p>
          <Link
            to='/Details/:zx9Speaker'
            state={{
              product1: speakerZX9P.product,
              img: speakerZX9P.thumbnail,
              beforeLocation: speakerZX9P.beforeLocation
            }}
            className='first-section-link'
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className='speaker-zx7-container'>
        <div className='speaker-zx7-text__cotainer'>
          <h2>ZX7 SPEAKER</h2>
          <Link
            to='/Details/:zx7Speaker'
            state={{
              product1: speakerZX7P.product,
              img: speakerZX7P.thumbnail,
              beforeLocation: speakerZX7P.beforeLocation
            }}
            className='first-section-link'
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className='earphones-container'>
        <div className='image-container'>
          <img src={earphone} alt='Earphone' />
        </div>
        <div className='earphones-text__cotainer'>
          <h2>YX1 EARPHONES</h2>
          <Link
            to='/Details/:yx1Earphones'
            state={{
              product1: earphoneYX1P.product,
              img: earphoneYX1P.thumbnail,
              beforeLocation: earphoneYX1P.beforeLocation
            }}
            className='first-section-link'
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
    </section>
  )
}
