import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/">Menu</Link>
                </li>
                <li>
                  <Link to="/">Reservations</Link>
                </li>
                <li>
                  <Link to="/">Order Online</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
            </ul>
            {/* for desktop */}
        </nav>
    )
}

export default Nav;
