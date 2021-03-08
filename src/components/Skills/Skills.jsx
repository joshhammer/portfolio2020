import React from 'react';
import { useState, useEffect } from 'react';

import './Skills.scss'

import data from '../../assets/data/data';

export default function Skills() {
  const initialBackground = {backgroundSize: '0% 100%'};

  const [htmlStyle, setHtmlStyle] = useState(initialBackground);
  const [cssStyle, setCssStyle] = useState(initialBackground);
  const [javaScriptStyle, setJavaScriptStyle] = useState(initialBackground);
  const [pythonStyle, setPythonStyle] = useState(initialBackground);
  const [reactStyle, setReactStyle] = useState(initialBackground);
  const [vueStyle, setVueStyle] = useState(initialBackground);
  const [gitStyle, setGitStyle] = useState(initialBackground);
  const [wordpressStyle, setWordpressStyle] = useState(initialBackground);
  const [jQueryStyle, setJqueryStyle] = useState(initialBackground);
  const [phpStyle, setPhpStyle] = useState(initialBackground);

  useEffect(() => {
    setTimeout(() => {
      setHtmlStyle({backgroundSize: `${data.skills.html.skillLevel} 100%`});
      setCssStyle({backgroundSize: `${data.skills.css.skillLevel} 100%`});
      setJavaScriptStyle({backgroundSize: `${data.skills.javascript.skillLevel} 100%`});
      setReactStyle({backgroundSize: `${data.skills.react.skillLevel} 100%`});
      setVueStyle({backgroundSize: `${data.skills.vue.skillLevel} 100%`});
      setGitStyle({backgroundSize: `${data.skills.git.skillLevel} 100%`});
      setWordpressStyle({backgroundSize: `${data.skills.wordpress.skillLevel} 100%`});
      setJqueryStyle({backgroundSize: `${data.skills.jQuery.skillLevel} 100%`});
      setPythonStyle({backgroundSize: `${data.skills.python.skillLevel} 100%`});
      setPhpStyle({backgroundSize: `${data.skills.php.skillLevel} 100%`});
    }, 200);
  })

  return(
    <main className="skills-container container">
      <h1 className="skills-title">SKILLS</h1>
      <div className="skills-group-container">
        <ul className="skills-list">
          <li className="skills-single-element skills-html" style={htmlStyle}>HTML</li>
          <li className="skills-single-element skills-css" style={cssStyle}>CSS/Sass</li>
          <li className="skills-single-element skills-javascript" style={javaScriptStyle}>JavaScript</li>
          <li className="skills-single-element skills-python" style={pythonStyle}>Python</li>
          <li className="skills-single-element skills-php" style={phpStyle}>PHP</li>
          <li className="skills-single-element skills-react" style={reactStyle}>React</li>
          <li className="skills-single-element skills-vue" style={vueStyle}>Vue</li>
          <li className="skills-single-element skills-git" style={gitStyle}>Git</li>
          <li className="skills-single-element skills-wordpress" style={wordpressStyle}>Wordpress</li>
          <li className="skills-single-element skills-jquery" style={jQueryStyle}>jQuery</li>
        </ul>
      </div>
    </main>
  )
}