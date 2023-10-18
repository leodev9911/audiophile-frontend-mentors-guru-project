import React from 'react'
import './HomeSection.css'
import speakerZX9 from '../assets/product-zx9-speaker/desktop/image-speaker-zx9.14ec07a6.png'
import earphone from '../assets/home/desktop/image-earphones-yx1.jpg'

export default function HomeSection () {
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
          <a href='' className='first-section-link'>
            SEE PRODUCT
          </a>
        </div>
      </div>
      <div className='speaker-zx7-container'>
        <div className='speaker-zx7-text__cotainer'>
          <h2>ZX7 SPEAKER</h2>
          <a href='' className='first-section-link'>
            SEE PRODUCT
          </a>
        </div>
      </div>
      <div className='earphones-container'>
        <div className='image-container'>
          <img src={earphone} alt='Earphone' />
        </div>
        <div className='earphones-text__cotainer'>
          <h2>ZX7 SPEAKER</h2>
          <a href='' className='first-section-link'>
            SEE PRODUCT
          </a>
        </div>
      </div>
    </section>
  )
}
