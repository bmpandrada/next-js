import React, { useState } from 'react'
import DarkTheme from './DarkTheme'

export default function ThemeSwitch() {
    const [isSwicth, setSwitch] = useState(false)
  return (<>
    <button onClick={()=>setSwitch(!isSwicth)}>{`${isSwicth ? 'Light Mode' : 'Dark Mode'}`}</button>
    
   {isSwicth && <DarkTheme />}
  </>
  )
}
