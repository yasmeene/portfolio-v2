/* import uniqid from 'uniqid' */
import './ExperiencesContainer.css'
import React from 'react';

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <h3>{experience.name}</h3>
    <h5>{experience.role}</h5>

    <p className='experience__description'>{experience.description}</p>
    <h6 className='experience__duration'>{experience.duration}</h6>
{/*     {experience.duration && (
      <ul className='experience__duration'>
        {experience.duration.map((item) => (
          <li key={uniqid()} className='experience__duration-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}
  </div>
)

export default ExperienceContainer
