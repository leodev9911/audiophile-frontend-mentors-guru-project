import { React } from 'react'
import logo from '../assets/icons/logo.svg'
import facebook from '../assets/icons/icon-facebook.svg'
import instagram from '../assets/icons/icon-instagram.svg'
import twitter from '../assets/icons/icon-twitter.svg'
import './Footer.css'

export default function Footer () {
  return (
    <footer>
      <section className='nav-footer'>
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
        </section>
      </section>
      <p className='footer-text__container'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
      </p>
      <section className='links-section'>
        <a><img src={facebook} alt='Facebook link' /></a>
        <a><img src={twitter} alt='Twitter link' /></a>
        <a><img src={instagram} alt='Instagram link' /></a>
      </section>
      <p className='copyright'>
        Copyright © 2022. All Rights Reserved
      </p>
    </footer>
  )
}
