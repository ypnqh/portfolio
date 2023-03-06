import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='home__img' />
        <h1 className='home__name'>Humberto Yupanqui Apaza</h1>
        <span className='home__education'>Soy ingeniero de software</span>
        <HeaderSocials />
        <a href='#contact' className='btn'>
          Contrátame
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home
