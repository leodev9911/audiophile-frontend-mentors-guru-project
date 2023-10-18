import React from 'react'
import logo from '../assets/icons/logo.svg'
import carIcon from '../assets/icons/icon-cart.svg'
import iconHamburger from '../assets/icons/icon-hamburger.svg'
import './Header.css'

export default function Header () {
  return (
    <nav>
      <a
        href=''
        className='logo-image'
      >
        <img
          src={logo} alt='Audiophile logo'
          className='logo'
        />
      </a>
      <img
        src={iconHamburger} alt='Icon hambuger'
        className='icon-hamburger'
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
