import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'; // Animated hamburger
import { FaInfinity } from 'react-icons/fa'; // Infinity icon
import './Navbar.css';
import logo from './assets/logo.png'; // Ensure correct path

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent background scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu-toggle">
          <Hamburger 
            toggled={isMenuOpen} 
            toggle={setIsMenuOpen} 
            size={25} 
            color="#fff" 
            label="Toggle menu" // Accessibility
          />
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/games" 
              className={location.pathname === '/games' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/updates' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Updates
            </Link>
          </li>
          <li>
            <Link 
              to="/staff" 
              className={location.pathname === '/staff' ? 'active' : ''} 
              onClick={() => setIsMenuOpen(false)}
            >
              Staff
            </Link>
          </li>
          {/* Infinity Realm Section */}
          <li className="infinity-realm">
           Infinity<FaInfinity size={20} />Realm
          </li>
        </ul>
      </nav>
      {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
