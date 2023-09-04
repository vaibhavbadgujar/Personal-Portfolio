import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


//do not use the image in production

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Responsive Watches Website ',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/responsive-watches-website-main',
  demo: 'https://vaibhavbadgujar-watches-website.netlify.app/'
},
{
  id: 2,
  image: IMG2,
  title: 'Responsive Car Website',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/responsive-car-website-main',
  demo: 'https://vaibhavbadgujar-car-website.netlify.app/'
},
{
  id: 3,
  image: IMG3,
  title: 'Responsive Travel Website',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/Responsive-Travel-Website',
  demo: 'https://vaibahvbadgujar-travel-website.netlify.app/'
},
{
  id: 4,
  image: IMG4,
  title: 'Responsive CoffeeShop Website',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/Coffee%20Shop%20WebSite',
  demo: 'https://vaibhavbadgujar-coffee-website.netlify.app/'
},
{
  id: 5,
  image: IMG5,
  title: 'Responsive Sneaker Website ',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/Sneakers%20WebSite',
  demo: 'https://vaibhavbadgujar-sneaker-website.netlify.app/'
},
{
  id: 6,
  image: IMG6,
  title: 'Responsive Headphone Website ',
  github: 'https://github.com/vaibhavbadgujar/Project/tree/master/responsive-headphones-main',
  demo: 'https://vaibhavbadgujar-headphones-website.netlify.app/'
}



]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Racent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo}) =>{
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="protfolio__item-cta">
              <a href={github} className='btn' target="_blank">Git Hub</a>
              <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          )

        }
        
        )
      }
      </div>


    </section>
  )
}

export default Portfolio