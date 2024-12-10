import React, { useState } from 'react'
import Logo from '../assets/Logo.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className='logo'>
            <img src={Logo} alt="Little Lemon Restaurant" />
        </a>
        {/* for Mobile */}
        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        {/* nav links */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Menu</a>
            </li>
            <li>
              <a href='/'>Reservations</a>
            </li>
            <li>
              <a href='/'>Order Online</a>
            </li>
            <li>
              <a href='/'>Login</a>
            </li>
        </ul>
        {/* for desktop */}
    </nav>
  )
}

export default Nav