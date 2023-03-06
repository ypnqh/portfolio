import React from 'react'
import './testimonials.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
// import Swiper core and required modules
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍'
  },
  {
    id: 2,
    image: Image3,
    title: 'John Doe',
    subtitle: 'Product designer at Dribble',
    comment:
      'I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍'
  }
]

const Testimonials = () => {
  return (
    <section className='testimonials container section'>
      <h2 className='section__title'>Clients & Reviews</h2>

      <Swiper
        className='testimonials__container grid'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        grabCursor
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className='testimonial__item' key={id}>
              <div className='thumb'>
                <img src={image} alt='' />
              </div>
              <h3 className='testimonials__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
