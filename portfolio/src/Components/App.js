import React from 'react'
import './app.css'
import { About, Contact, Home, Nav, Project } from '../Containers/index'
import Footer from '../Containers/Footer/Footer'
import GotoTop from './Toool/GotoTop'


export default function App() {


  return (
    <>
    <div className="app">
        <Nav  />
        <Home  />
        <About  />
        <Project  />
        <Contact  />
        <Footer  />
        <GotoTop  />
        </div>
    </>
  )
}
