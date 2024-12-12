import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
      setMenuOpen(false);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Little Lemon Restaurant" />
            </Link>
            {/* for Mobile */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            {/* nav links */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                  <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/About" onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeMenu}>Menu</Link>
                </li>
                <li>
                  <Link to="/Booking" onClick={closeMenu}>Reservations</Link>
                </li>
                <li>
                  <Link to="/" onClick={closeMenu}>Order Online</Link>
                </li>
                <li>
                  <Link to="/SignUp" onClick={closeMenu}>Sign-up/Login</Link>
                </li>
            </ul>
            {/* for desktop */}
        </nav>
    )
}

export default Nav;
