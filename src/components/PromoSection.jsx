import React from 'react'
import './PromoSection.css'
import imageGearDesktop from '../assets/shared/desktop/image-best-gear.jpg'
import imageGearTablet from '../assets/shared/tablet/image-best-gear.jpg'
import imageGearMobile from '../assets/shared/mobile/image-best-gear.jpg'

export default function PromoSection () {
  return (
    <section className='promo-section'>
      <section className='text-section'>
        <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
        <p>Located at the heart of New York City, Audiophile is the prmier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstrarion rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </section>
      <img
        src={imageGearDesktop}
        alt='Promo image'
        className='promo-image'
      />
      <img
        src={imageGearTablet}
        alt='Promo image'
        className='promo-image-tablet'
      />
      <img
        src={imageGearMobile}
        alt='Promo image'
        className='promo-image-mobile'
      />
    </section>
  )
}
