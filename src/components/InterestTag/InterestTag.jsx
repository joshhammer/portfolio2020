import React from 'react';

import './InterestTag.scss';

export default function InterestTag(props) {
  return(
    <div className='interest-tag'>
      <a href={props.interestObj.url} target='_blank' rel='noopener noreferrer' className='interest-title'>{props.interestObj.title}</a>
    </div>
  )
}