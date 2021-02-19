import React from 'react';
import { useState, useEffect } from 'react';

import './Skills.scss'

export default function Skills() {

  const [javaScriptStyle, setJavaScriptStyle] = useState({backgroundSize: '0% 100%'});
  const [htmlStyle, setHtmlStyle] = useState({backgroundSize: '0% 100%'});
  const [cssStyle, setCssStyle] = useState({backgroundSize: '0% 100%'});

  useEffect(() => {
    setTimeout(() => {
      setJavaScriptStyle({backgroundSize: '70% 100%'});
      setHtmlStyle({backgroundSize: '80% 100%'});
      setCssStyle({backgroundSize: '90% 100%'});
    }, 200);
  })

  return(
    <main className="skills-container container">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-group-container">
        <ul className="skills-list">
          <li className="skills-single-element skills-html" style={htmlStyle} data-skill-percentage="80">HTML</li>
          <li className="skills-single-element skills-css" style={cssStyle} data-skill-percentage="90">CSS</li>
          <li className="skills-single-element skills-javascript" style={javaScriptStyle} data-skill-percentage="70">JavaScript</li>
        </ul>
      </div>
    </main>
  )
}