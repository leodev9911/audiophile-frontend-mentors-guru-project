import { React } from 'react'
import './FirstSection.css'
import { Link } from 'react-router-dom'

export default function FirstSection ({ headphoneXX99IIP }) {
  return (
    <section className='first-section'>
      <p className='new-product'>NEW PRODUCT</p>
      <h2 className='first-section-h2'>XX99 MARK II HEADPHONES</h2>
      <p className='first-section-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      <Link
        to='/Details/:xx99MarkTwoHeadphones'
        state={{
          product1: headphoneXX99IIP.product,
          img: headphoneXX99IIP.thumbnail,
          beforeLocation: headphoneXX99IIP.beforeLocation
        }}
        className='first-section-link'
      >
        SEE PRODUCT
      </Link>
    </section>
  )
}
