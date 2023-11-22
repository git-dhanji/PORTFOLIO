import React, { createContext, useState } from 'react';
const Rise = createContext()





const Themer = (props) => {
    const [color,setColor] = useState('#fff')
    const Toggle =() =>{
        if(color==="#fff"){
            setColor("#000")
        }else{
            setColor("#fff")
        }
    }
    return (
        <Rise.Provider value={{color,Toggle}}>
            {props.children}
        </Rise.Provider>
    )
}




export { Rise,Themer }
