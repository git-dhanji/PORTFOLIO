import React from 'react'
import './contact.css'

export default function Contact(props) {
  return (
    <section id="Contact" className={`contact-section `}>
      <div className="contact-heading">
        <h2>Contact</h2>
        <h1>Don't be shy! Hit me up! 👇</h1>
      </div>
      <div className="contact-details">
        <div className='details-pro'>
          <div className='loction-icon'><i className="fa-solid fa-map-location-dot"></i></div>
          <div className="loction-details">
            <h1>Loction</h1>
            <p>Bihar , Sasaram</p>
          </div>
        </div>
        <div className='details-pro'>
          <div className='loction-pro'><i className="fa-solid fa-envelope-open-text"></i></div>
          <div className="loction-details">
            <h1>Mail</h1>
            <a href="mailto:dearbrodk@gmail.com">dearbrodk@gmail.com</a>
          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}
