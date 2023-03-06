import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
      <div className='about__box'>
        <i className='about__icon icon-fire' />

        <div>
          <h3 className='about__title'>198</h3>
          <span className='about__subtitle'>Proyectos completados</span>
        </div>
      </div>

      <div className='about__box'>
        <i className='about__icon icon-cup' />

        <div>
          <h3 className='about__title'>5670</h3>
          <span className='about__subtitle'>Cup of coffee</span>
        </div>
      </div>

      <div className='about__box'>
        <i className='about__icon icon-people' />

        <div>
          <h3 className='about__title'>427</h3>
          <span className='about__subtitle'>Satisfied clients</span>
        </div>
      </div>

      <div className='about__box'>
        <i className='about__icon icon-badge' />

        <div>
          <h3 className='about__title'>35</h3>
          <span className='about__subtitle'>Nominees winner</span>
        </div>
      </div>
    </div>
  )
}

export default AboutBox
