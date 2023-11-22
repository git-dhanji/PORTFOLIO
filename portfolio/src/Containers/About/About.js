import React from 'react'
import {aboutme} from '../../assets/imports'
import './about.css'

export default function About() {
 
  return (
    <section id='About' className={`about-section `}>
      <div className="about-image">
        <img src={aboutme} alt="aboutmeimag" />
      </div>
      <div className="about-me">
        <h3>About Me</h3>
        <h2>A dedicated Front-end Developer
          based in Bihar, Sasaram 📍</h2>
          <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
      </div>
    </section>
  )
}
