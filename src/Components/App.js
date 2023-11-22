import React from 'react'
import './app.css'
import { About, Contact, Home, Nav, Project } from '../Containers/index'
import Footer from '../Containers/Footer/Footer'
import { Themer } from '../Context/Theme'
import GotoTop from './Toool/GotoTop'
export default function App() {
  return (
  <>
  <Themer>
  <Nav/>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  <GotoTop/>
  </Themer>
  </>
  )
}
