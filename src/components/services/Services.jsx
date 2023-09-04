import React from 'react'
import './services.css'
import {BsCheckAll} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              UX Research. Conduct research to understand the needs, behaviors, and preferences of the target audience.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              collecting, researching, investigating and evaluating user requirements
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Mobile Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Visual Design.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Information architecture
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Wireframing and Prototyping.
              </p>
            </li>
          </ul>


        </article>
        {/* END OF UI/UX */}




        <article className='service'>
          <div className="service__head">
          <h3>Web Development</h3>
          </div>

          <ul className="service__list">
           
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Website Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Web Application Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              eCommerce Solutions Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Dedicated Content Management System Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              No-code Development & Low-code Development
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Ideation - Market Research - Wireframing - Prototyping
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Project Management - UI Design - UX Design - Coding - QA Testing
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Cybersecurity - Consulting - Publishing - Maintenance - Support
              </p>
            </li>
          </ul>


        </article>
        {/* END OF Web Development */}





        <article className='service'>
          <div className="service__head">
          <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              SEO content development and promotion
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Graphic design.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Copywriting.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Video production and marketing.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              E-book marketing.
              </p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>
              Social media marketing.
              </p>
            </li>
          </ul>


        </article>
        {/* END OF Content Creation */}
      </div>

    </section>
  )
}

export default Services