import React, { useState, useEffect, useRef } from "react";
import logoDark from '../assets/images/ISIMa CS Chapter white2 (1).png';
import logoLight from '../assets/images/ISIMa CS Chapter (1).png';

import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill, BsX } from 'react-icons/bs';
import ParticlesComponent from './ParticlesComponent'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = location.pathname.substring(1) || 'home';

  // Add body class to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      // Add active class immediately for proper visibility
      setTimeout(() => {
        const menuPanel = document.getElementById("mobile-menu");
        const overlay = document.querySelector(".menu-overlay");
        if (menuPanel) {
          menuPanel.classList.add("active");
        }
        if (overlay) {
          overlay.classList.add("active");
        }
      }, 10);
    }
  };

  const closeMenu = () => {
    const menuPanel = document.getElementById("mobile-menu");
    const overlay = document.querySelector(".menu-overlay");
    
    if (menuPanel) {
      menuPanel.classList.remove("active");
      menuPanel.classList.add("slide-out");
      
      if (overlay) {
        overlay.classList.remove("active");
      }
      
      setTimeout(() => {
        setIsOpen(false);
        menuPanel.classList.remove("slide-out");
      }, 400);
    }
  };

  const handleMenuOptionClick = (path) => {
    navigate(path);
    closeMenu();
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    // Add escape key listener to close menu
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      <div className="modern-navbar" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div id="navbar-particles" className="navbar-particles-container">
          <ParticlesComponent isDarkMode={isDarkMode} /> 
        </div>
        
        <div className="navbar-content">
          <Link to="/" className="navbar-logo-container" aria-label="IEEE CIS Home">
            <div className="navbar-logo">
              <img src={isDarkMode ? logoDark : logoLight} alt="IEEE Computational Intelligence Society Logo" />
            </div>
          </Link>
          
          <nav className="navbar-links" aria-label="Main navigation">
            <ul className="navbar-menu">
              <li className="navbar-menu-item">
                <Link to="/" 
                  className={`navbar-menu-link ${activeSection === "home" ? "navbar-menu-active" : ""}`}
                  aria-current={activeSection === "home" ? "page" : undefined}>
                  <span className="navbar-menu-text">Home</span>
                  <span className="navbar-menu-indicator"></span>
                </Link>
              </li>
              
              <li className="navbar-menu-item">
                <Link to="/events" 
                  className={`navbar-menu-link ${activeSection === "events" ? "navbar-menu-active" : ""}`}
                  aria-current={activeSection === "events" ? "page" : undefined}>
                  <span className="navbar-menu-text">Events</span>
                  <span className="navbar-menu-indicator"></span>
                </Link>
              </li>
              
              <li className="navbar-menu-item">
                <Link to="/contact" 
                  className={`navbar-menu-link ${activeSection === "contact" ? "navbar-menu-active" : ""}`}
                  aria-current={activeSection === "contact" ? "page" : undefined}>
                  <span className="navbar-menu-text">Contact us</span>
                  <span className="navbar-menu-indicator"></span>
                </Link>
              </li>
            </ul>
            
            <div className="navbar-actions">
              <a 
                href="https://forms.ieee.org/form-pages/ieee-membership-application" 
                className="navbar-cta-button group"
                target="_blank" 
                rel="noopener noreferrer">
                <span className="cta-icon">
                  <svg className="cta-svg" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                  </svg>
                </span>
                <span className="cta-text">Join US</span>
              </a>
              
              <button className="theme-toggle" onClick={toggleDarkMode} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                <div className="theme-toggle-track">
                  <div className="theme-toggle-thumb"></div>
                  <div className="theme-toggle-icon">
                    {isDarkMode ? <FaSun /> : <BsMoonStarsFill />}
                  </div>
                </div>
              </button>
              
              {/* New menu toggle button with fresh design */}
              <button
                className="mobile-menu-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="mobile-menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu panel with ref for handling clicks */}
      {isOpen && (
        <div className="mobile-menu-panel" id="mobile-menu" ref={menuRef}>
          <div className="mobile-menu-container">
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">Menu</h2>
              <button
                className="mobile-menu-close"
                type="button"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <BsX />
              </button>
            </div>
            
            <ul className="mobile-menu-items">
              <li className="mobile-menu-item">
                <a 
                  className={activeSection === "home" ? "mobile-menu-active" : ""}
                  onClick={() => handleMenuOptionClick("/")}
                >
                  <span>Home</span>
                </a>
              </li>
              <li className="mobile-menu-item">
                <a 
                  className={activeSection === "events" ? "mobile-menu-active" : ""}
                  onClick={() => handleMenuOptionClick("/events")}
                >
                  <span>Events</span>
                </a>
              </li>
              <li className="mobile-menu-item">
                <a 
                  className={activeSection === "contact" ? "mobile-menu-active" : ""}
                  onClick={() => handleMenuOptionClick("/contact")}
                >
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
            
            <div className="mobile-menu-footer">
              <a 
                href="https://forms.ieee.org/form-pages/ieee-membership-application" 
                className="mobile-cta-button"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg fill="currentColor" viewBox="0 0 512 512">
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
                <span>Join US</span>
              </a>
              
              <div className="mobile-social-links">
                <a href="https://www.facebook.com/ieee.cis.isima" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/cis.isima.sbc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/showcase/ieee-cis-chapter-isima-student-branch/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mobile-copyright">
                <a href="https://medaziznasri.github.io/personal_portfolio/" target="_blank" rel="noopener noreferrer">
                  &copy; Made by Mohamed Aziz Nasri
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add overlay for menu background */}
      <div className="menu-overlay" onClick={closeMenu}></div>
      
      {/* Add spacer element to push content below navbar */}
      <div className="navbar-spacer" aria-hidden="true"></div>
    </>
  );
}

export default NavBar;