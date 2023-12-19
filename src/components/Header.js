import Logo from '../assets/logo.png'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <ul className={styles.list}>
            <li>Home</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Login</li>
        </ul>
    </div>
  )
}

export default Header
