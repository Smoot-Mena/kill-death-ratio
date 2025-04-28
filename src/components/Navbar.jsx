import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        "Game News",
        "My Profile",
        "Browse Gamers",
        "My Favorite Games"
    ];

    const linkFormatter = (link) => {
        if (link == "My Profile" || link == "My Favorite Games") {
            return link.replaceAll("My ", "").replaceAll(" ", "-").toLowerCase();
        } else {
            return link.replaceAll(" ", "-").toLowerCase();
        }
    }

  return (
    <nav id='global-nav'>
        <Link id='logo-link' to={"/"}>Logo</Link>
        <nav className='dynamic-nav'>
            {navLinks.map((link, index) => (
                <Link key={index} to={`${linkFormatter(link)}`}>{link}</Link>
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