import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Basket from '../assets/Basket.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Little Lemon Restaurant" />
            </Link>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/About" onClick={closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/Menu" onClick={closeMenu}>Menu</Link>
                </li>
                <li>
                    <Link to="/Booking" onClick={closeMenu}>Reservations</Link>
                </li>
                <li>
                    <Link to="/Order" onClick={closeMenu}>Order Online</Link>
                </li>
                <li>
                    <Link to="/Signup" onClick={closeMenu}>Sign-up/Login</Link>
                </li>
                <img style={{ maxWidth: "35px" }} src={Basket} alt='basket icon'></img>
            </ul>
        </nav>
    );
};

export default Nav;
