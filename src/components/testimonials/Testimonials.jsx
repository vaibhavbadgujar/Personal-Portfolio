import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
{
  avatar: AVTR1,
  name: 'Murad Sayyad',
  review: 'Vaibhav was very helpful and fast to respond to my inquiry to help with Wordpress website issues.  His knowledge was comprehensive.  Even better, his advice helped me enough to solve the problems and he did not accept any payment for this, very straight up guy! Thank you Vaibhav '
  
},
{
  avatar: AVTR2,
  name: 'Neha Tomke',
  review: 'Vaibhav is a great help managing a very out of date website. Everything we ask him to do is done quickly and efficiently, we would be lost without him '
  
},
{
  avatar: AVTR3,
  name: 'Vineet Bhavsar',
  review: 'Working with Vaibhav Ian was better than expected and we had really high expectations. He is an incredibly talented developer but what really makes him stand out is his work ethic and steady approach. Time after time, and without us asking, he added enhancements and improvements that resulted in a better end product for us and our clients. '
  
},
{
  avatar: AVTR4,
  name: 'Vicky',
  review: 'We have the fortune of working with Ian on a very regular basis. Every single project is done in a timely fashion and is delivered exactly as is outlined. Beyond that, his development skills and expertise make him an invaluable part of our process. We absolutely offer our highest possible recommendation. '
  
},

]




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index) =>{
            return(
               <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar} />
        </div>
        <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </ SwiperSlide>
            )
          })
        }

        
      </Swiper>



    </section>
  )
}

export default Testimonials