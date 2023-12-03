import React, { useState } from 'react'
import './random.css'
import { useDispatch, useSelector } from 'react-redux'
import { modeChange } from '../features/mode/mode'

export default function Random() {
  const [font, setFont] = useState('')
  const text = useSelector((text) => text.counter.text)
 
  const value = useSelector((text) => text.counter.value)
  const dispatch = useDispatch();


  return (
    <div className='random'>
      <input
        type="text"
        value={font}
        onChange={(e) => { setFont(e.target.value) }}
      />
      <button onClick={() => {
        dispatch(modeChange(font))
        setFont('')
      }
      }>SetText</button>
      <div className="-box1">{text.map((text,key)=>(
        <li key={key} className='list'>{text}</li>
      ))}</div>
      <div className="-box1">{value}</div>
    </div>
  )
}
