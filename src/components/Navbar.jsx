import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        "Game News",
        "My Profile",
        "Browse Gamers",
        "My Favorite Games"
    ];
  return (
    <nav id='global-nav'>
        <Link id='logo-link'>Logo</Link>
        <nav className='dynamic-nav'>
            {navLinks.map((link, index) => (
                <Link key={index}>{link}</Link>
            ))}
        </nav>
        <nav id='account-logout-links'>
            <Link>Settings</Link>
            <Link>Logout</Link>
        </nav>
    </nav>
  )
}

export default Navbar;