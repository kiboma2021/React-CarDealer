import {Link, NavLink} from 'react-router-dom';

import Logo from '../assets/logo.png'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <Link to='/'>
            <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        
        <nav className="navlinks">
          <NavLink to='/'>Home </NavLink>
          <NavLink to='job' >Careers </NavLink>
          <NavLink to='contact' >Contact us </NavLink>
          <NavLink to='login'>Login </NavLink>

        </nav>
    </div>
  )
}

export default Header
