import { React } from 'react'
import logo from '../assets/icons/logo.svg'
import carIcon from '../assets/icons/icon-cart.svg'
import iconHamburger from '../assets/icons/icon-hamburger.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import { useActualLocation } from '../hooks/useActualLocation'

export default function Header () {
  const { actualLocation, pageTitle } = useActualLocation()

  return (
    <>
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
              <Link to={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/Headphones`}>
                Headphones
              </Link>
            </li>
            <li>
              <Link to={`/Speakers`}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to={`/Earphones`}>
                Earphones
              </Link>
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
      {
        actualLocation !== '/' &&
          <h2 className='page-title'>
            {pageTitle}
          </h2>
      }
    </>
  )
}
