import React from 'react';
import {useState} from 'react'

import './InterestTag.scss';

export default function InterestTag(props) {
  const url = props.interestObj.imageUrl;
  const [imageStyle, setImageStyle] = useState({
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  });
  const [isHovered, setHovered] = useState(false);

  const enterFunction = (e) => {
    console.log(props.interestObj.imageUrl);
    console.log(url);
    setHovered(!isHovered);
    setImageStyle({
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      left: '50%',
      top: '50%'
    });
  }
  const leaveFunction = (e) => {
    console.log('leave');
    setHovered(!isHovered);
    setImageStyle({
      backgroundImage: `url(${url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      left: '-100%',
      top: '-100%'
    });
  }


  return(
    <div className='interest-tag' data-image={props.interestObj.imageUrl}>
      <div 
        className={isHovered ? 'hover-image-placeholder close' : 'hover-image-placeholder'} 
        style={isHovered ? imageStyle : null}>
      </div>
      <div className="hoverme">
        <a 
          href={props.interestObj.url} 
          target='_blank' rel='noopener noreferrer' 
          className='interest-title' 
          onMouseEnter={enterFunction}
          onMouseLeave={leaveFunction}>
          {props.interestObj.title}
        </a>
      </div>
    </div>
  )
}