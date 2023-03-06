import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
// import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>Acerca de mí</h2>

      <div className='about__container grid'>
        <img src={Image} alt='' className='about__img' />

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              Soy Humberto, Ingeniero de Software y desarrollador web de Cusco, Perú. Tengo una gran experiencia en el diseño, construcción y personalización de sitios web, también soy bueno en WordPress.
            </p>
            <a href='' className='btn'>
              Descargar CV
            </a>
          </div>

          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Desarrollo Web</h3>
                <span className='skills__number'>90%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage development' />
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Aplicaciones Móviles</h3>
                <span className='skills__number'>80%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage ui__design' />
              </div>
            </div>

            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name'>Diseño Web</h3>
                <span className='skills__number'>60%</span>
              </div>

              <div className='skills__bar'>
                <span className='skills__percentage photography' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutBox /> */}
    </section>
  )
}

export default About
