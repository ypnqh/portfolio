import React from 'react'

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.instagram.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <i class='fa-brands fa-instagram' />
      </a>

      <a
        href='https://www.twitter.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <i class='fa-brands fa-twitter' />
      </a>

      <a
        href='https://www.behance.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <i class='fa-brands fa-behance' />
      </a>

      <a
        href='https://www.dribble.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <i class='fa-brands fa-dribbble' />
      </a>

      <a
        href='https://www.pinterest.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <i class='fa-brands fa-pinterest' />
      </a>
    </div>
  )
}

export default HeaderSocials
