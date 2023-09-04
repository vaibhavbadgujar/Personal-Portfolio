import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { LuPhoneCall } from 'react-icons/lu'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef ();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ttirw9', 'template_jxm6cop', form.current, 'qTXO_ebBDxdX1punE')
      
    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vaibhavbadgujar2016@gmail.com</h5>
            <a href="mailto:vaibhavbadgujar2016@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact__option'>
            <LuPhoneCall className='contact__option-icon'/>
            <h4>Mobile Number</h4>
            <h5>+91 7385099963</h5>
            <a href="tel:+917385099963" target="_blank">Call</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7385099963</h5>
            <a href="https://api.whatsapp.com/send?phone=917385099963" target="_blank">Send a Message</a>

          </article>
        </div>

        {/* End of contact option  */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" id="" placeholder='You Full Name ' required />
        <input type="email" name="email" id="" placeholder='Your Email'required/>
        <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact