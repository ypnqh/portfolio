import React from 'react'
import './resume.css'
import data from './data.js'
import Card from './Card'

export function Resume () {
  return (
    <section className='resume container section' id='resume'>
      <h2 className='section__title'>Experiencia</h2>

      <div className='resume__container grid'>
        <div className='timeline grid'>
          {data.map((val, id) => {
            if (val.category === 'experience') {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className='timeline grid'>
          {data.map((val, index) => {
            if (val.category === 'education') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}
