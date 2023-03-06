import React from 'react'

const ScrollDown = () => {
  return (
    <div className='scroll__down'>
      <a href='#about' className='mouse__wrapper'>
        <span className='home__scroll-name'>Desplazarse hacia abajo</span>
        <span className='mouse'>
          <span className='wheel' />
        </span>
      </a>
    </div>
  )
}

export default ScrollDown
