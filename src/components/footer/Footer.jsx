import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'  >VAIBHAV</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#textimonials">Textimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/vicky.badgujar.94/"><FaFacebook /></a>
        <a href="https://www.instagram.com/vickybadgujar_143/"><FiInstagram /></a>
        <a href="https://twitter.com/badbyname"><IoLogoTwitter /></a>
        
      </div>

      <div className="footer__copyright">
        <small> Copyright &copy; Vaibhav Badgujar - All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer