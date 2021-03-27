import React from 'react';
import './About.scss'

import InterestTag from '../InterestTag/InterestTag'
import data from '../../assets/data/data'

export default function About() {
  return(
    <main className="about-container container">
      <h1 className='about-title section-title'>About</h1>
      <h2 className='about-subtitle section-subtitle'>I am a junior frontend developer and passionate musician</h2>
      <p className='about-paragraph'>{data.description}</p>
      <h2 className='section-subtitle'>Interests</h2>
      <div className='interests-container'>
        {data.interests.map((item, index) => {
          return <InterestTag interestObj={item} key={index} />
        })}
      </div>
    </main>
  )
}