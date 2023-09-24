import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vaibhav Badgujar</h1>
        <h5 className="text-light">
        <Typewriter
            words={['Frontend Developer','UI/UX Designer','Web Developer','Photographer' ]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
          
          </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='me__img' src={ME} alt="me"  />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
    
  )
}

export default Header