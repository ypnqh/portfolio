import React from 'react'
import { GithubIcon, InstagramIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../icons/Icons'

const HeaderSocials = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://www.instagram.com/ypnqh'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <InstagramIcon />
      </a>

      <a
        href='https://www.twitter.com/ypnqh_'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <TwitterIcon />
      </a>

      <a
        href='https://www.behance.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <LinkedInIcon />
      </a>

      <a
        href='https://www.pinterest.com/'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <PinterestIcon />
      </a>

      <a
        href='https://www.github.com/ypnqh'
        className='home__social-link'
        target='_blank' rel='noreferrer'
      >
        <GithubIcon />
      </a>
    </div>
  )
}

export default HeaderSocials
