import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="Logo" />
        <div>
            <ul>
                <li>Home</li>
                <li>Vehicles</li>
                <li>Contact us</li>
                <li>Login</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
