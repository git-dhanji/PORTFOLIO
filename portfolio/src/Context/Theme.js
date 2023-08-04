import reax from '../assets/js.svg'
import React, { createContext } from 'react';
const Rise = createContext()

const skill = [
    {name:"html",url:reax},
    {name:"html",url:reax},
    {name:"html",url:reax},
    {name:"html",url:reax},
    {name:"html",url:reax},
    {name:"html",url:reax}
]



const Themer = (props) => {
  
    return (
        <Rise.Provider value={skill}>
            {props.children}
        </Rise.Provider>
    )
}




export { Rise,Themer }
