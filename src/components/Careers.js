import React from 'react'
import { Outlet } from 'react-router-dom'
const Careers = () => {
  return (
    <div className='nav-bar' style={{flexDirection:'column'}}>
        <Outlet />
        <h1>No careers are posted. Check again latter</h1>
      
    </div>
  )
}

export default Careers
