import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ExperiencesContainer from '../ExperiencesContainer/ExperiencesContainer'
import './Experience.css'
import React from 'react';

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experiences'>
      <h2 className='section__title'>Experience</h2>

      <div className='experience__grid'>
        {experience.map((experience) => (
          <ExperiencesContainer key={uniqid()} experience ={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience