import React from 'react'
import './app.css'
import { About, Contact, Home, Nav, Project } from '../Containers/index'
import Footer from '../Containers/Footer/Footer'
import GotoTop from './Toool/GotoTop'
import Themnav from './Theme/Themnav'
// import Scroll from './Scroll/Scroll'
// import  Random from '../pages/Random'
export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <GotoTop />
      <Themnav/>
      {/* <Random/> */}
      {/* <Scroll/> */}
    </>
  )
}
