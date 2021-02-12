import React from 'react';

import './MainTitle.scss';

export default function MainTitle() {
  return(
    <div className="main-title-container">
      <h1 className="main-title-name uppercase color-change">Josh Hammer</h1>
      <h2 className="main-title-position uppercase">Frontend Developer</h2>
      <h3 className="main-title-subtitle uppercase">Portfolio</h3>
    </div>
  )
}

