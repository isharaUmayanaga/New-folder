import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Careers', path: '/careers' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
       <div className="logo-container ">
          <div className="logo-square"></div>
          <div><span>Nexora</span></div>
        </div>
       

        <div className="nav-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`nav-link ${link.name === 'Home' ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="talk-button">Talk to us</button>
      </div>
    </nav>
  );
};

export default Navbar;
