import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="about image" />
        </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>6+ Months Working</small>
          </article>

          <article className="about__card">
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>3+ Worldwide</small>
          </article>

          <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
          <h5>Project</h5>
          <small>20+ Completed</small>
          </article>
          </div>

          <p>
          Hi, I'm Vaibhav Badgujar. I'm a Frontend Developer with a Bachelor of Engineering degree in Electrical Engineering. <br />

I'm a result-oriented person who believes in hard work. I'm also a creative thinker and I'm always looking for new ways to solve problems. In my free time, I enjoy solo bike riding and poetry writing. <br />

I have a strong foundation in computer programming is rock-solid, spanning front-end technologies like HTML, CSS, JavaScript, jQuery, Bootstrap, and React.js. Additionally, I'm well-versed in UI/UX design using tools such as Figma, Photoshop, Sketch, Adobe XD, and Illustrator. On the backend, I have proficiency in SQL, PLSQL, shell scripting, and ASP.NET with C#. My adeptness extends to various design software applications. <br />

I'm passionate about learning new things and I'm always eager to take on new challenges. I'm confident that I have the skills and dedication to be a successful Frontend Developer. <br />

I'm available for full-time or contract work. 


            </p>  
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About