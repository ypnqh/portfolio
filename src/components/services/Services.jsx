import React from 'react'
import './services.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
// import Image3 from '../../assets/service-3.svg'

const Image3 = 'https://hustavojhon.github.io/portfolio/assets/images/icon-app.svg'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Diseño UX/UI ',
    description:
      'Diseño de interfaces de usuario y experiencia de usuario para aplicaciones web y móviles.'
  },
  {
    id: 2,
    image: Image2,
    title: 'Aplicaciones Web',
    description:
      'Desarrollo de aplicaciones web con tecnologías como React, Django, Svlete, etc.'
  },
  {
    id: 3,
    image: Image3,
    title: 'Aplicaciones Móviles',
    description:
      'Desarrollo de aplicaciones móviles para Android y iOS. Tecnologías: React Native, Flutter, NativeScript, etc.'
  }
]

const Services = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section__title'>Servicios</h2>

      <div className='services__container grid'>
        {data.map(({ id, image, title, description }) => {
          return (
            <div className='services__card' key={id}>
              <img src={image} alt='' className='services__img' />

              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
