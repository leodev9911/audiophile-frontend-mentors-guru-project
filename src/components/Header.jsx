import React from 'react'
import logo from '../assets/icons/logo.svg'
import carIcon from '../assets/icons/icon-cart.svg'
import './Header.css'

export default function Header () {
  return (
    <nav>
      <img
        src={logo} alt='Audiophile logo'
        className='logo'
      />
      <section className='right-section'>
        <ul className='unordered-list__nav'>
          <li>
            <a href='#'>
              Home
            </a>
          </li>
          <li>
            <a href='#'>
              Headphones
            </a>
          </li>
          <li>
            <a href='#'>
              Speakers
            </a>
          </li>
          <li>
            <a href='#'>
              Earphones
            </a>
          </li>
        </ul>
        <figure className='icon-cart__container'>
          <img
            src={carIcon} alt='Car icon'
            className='car-button__nav'
          />
        </figure>
      </section>
    </nav>
  )
}
