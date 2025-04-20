import React from 'react'
import './project.css'


import first from '../../assets/first.png'
import three from '../../assets/three.png'


export default function Project() {
  return (
    <section id='Project' className='project-section'>
      <div className="project-text">  
        <h1>Project</h1>
        <p>Each project is a unique piece of development 🧩</p>
      </div>

      {/* This is parent grid */}
      <div className="project-box">
        <div className="project-grid pro">
          <div className="project-image-grid">
            <img src={first} alt="" />
          </div>
          <div className="project-text-desc">
            <h3>Chai X blog </h3>
            <p>Chai x Blog is a dynamic blogging platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete blog posts in a clean and responsive interface.</p>
            <div className="project-livedemo">
              <p><a href="https://github.com/git-dhanji/chaiXblog">Code <i className="fa-brands fa-github"></i></a></p>
              <p><a href="https://chaixblog.vercel.app/">Livedemo <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>

            </div>
            <div className="project-text-btn">
              <button>React</button>
              <button>sCss</button>
            </div>
          </div>
        </div>



        {/* grid box secod */}
        <div className="project-grid pro pro2">
          <div className="project-text-desc">
            <h3>Project Name </h3>
            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
            <div className="project-livedemo">
              <p><a href="https://github.com/git-dhanji/Newswebsite_based_onApi">Code <i className="fa-brands fa-github"></i></a></p>
              <p><a href="https://thenewsproject.vercel.app/">Livedemo <i className="fa-solid fa-arrow-up-right-from-square"></i></a></p>

            </div>
            <div className="project-text-btn">
              <button>React</button>
              <button>SCss</button>
            </div>
          </div>
          <div className="project-image-grid">
            <img src={three} alt="" />
          </div>
        </div>
      </div>
     
    </section>
  )
}
