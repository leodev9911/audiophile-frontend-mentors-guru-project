import { React, useContext } from 'react'
import logo from '../assets/icons/logo.svg'
import carIcon from '../assets/icons/icon-cart.svg'
import iconHamburger from '../assets/icons/icon-hamburger.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import { useActualLocation } from '../hooks/useActualLocation'
import { CartContext } from '../context/cart'

export default function Header ({ setCartIsActive }) {
  const { actualLocation, pageTitle } = useActualLocation()
  const handleShowCart = () => {
    setCartIsActive(prevCartActive => !prevCartActive)
  }
  const { cart } = useContext(CartContext)

  return (
    <>
      <nav>
        <Link
          to='/'
          className='logo-image'
        >
          <img
            src={logo} alt='Audiophile logo'
            className='logo'
          />
        </Link>
        <img
          src={iconHamburger} alt='Icon hambuger'
          className='icon-hamburger'
        />
        <section className='right-section'>
          <ul className='unordered-list__nav'>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/Products/Headphones'>
                Headphones
              </Link>
            </li>
            <li>
              <Link to='/Products/Speakers'>
                Speakers
              </Link>
            </li>
            <li>
              <Link to='/Products/Earphones'>
                Earphones
              </Link>
            </li>
          </ul>
          <figure
            className='icon-cart__container'
            onClick={() => handleShowCart()}
          >
            <img
              src={carIcon} alt='Car icon'
              className='car-button__nav'
            />
            {cart.length > 0 && <span>{cart.length}</span>}
          </figure>
        </section>
      </nav>
      {
        actualLocation !== '/' &&
          <h2 className='page-title'>
            {pageTitle}
          </h2>
      }
    </>
  )
}
