import React, { useEffect, useState } from 'react'
import './gototop.css'
import { FaArrowUpLong } from "react-icons/fa6";

const GotoTop = () => {
  const GoHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  const [Visible, Setvisible] =  useState(false)

  const listenTohandle = () => {
    let heithtoHide = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    if (winScroll > heithtoHide) {
      Setvisible(true)
    } else {
      Setvisible(false)
    }

  }
  useEffect(() => {
    window.addEventListener("scroll", listenTohandle)
    return () => window.removeEventListener("scroll", listenTohandle)
  }, [])

  return (
    <>
   { Visible && (
    <div className='top-btn' onClick={GoHome}>
      <FaArrowUpLong fontSize={"1.5rem"} color='#fff' className='btnupdown' />
    </div>
    )}
  </>
  )
}

export default GotoTop
