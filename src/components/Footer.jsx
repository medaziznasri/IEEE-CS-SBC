import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Footer.css";

function Footer() {
  const navigate = useNavigate();

  const location = useLocation();
  const footerRef = useRef(null);
  const animationRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 992);
  const [isMounted, setIsMounted] = useState(false);
  
  // Safe navigation function
  const handleNavigate = (path) => {
    if (path === location?.pathname) return;
    
    try {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.log("Navigation error:", error);
      window.location.href = path;
    }
  };
  
  // Setup component mount state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  // Safe window resize handler
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Throttled resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (isMounted) {
          setWindowWidth(window.innerWidth);
        }
      }, 250); // Throttle to prevent excessive updates
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isMounted]);
  
  // Optimized shooting star animation
  useEffect(() => {
    if (!footerRef.current || typeof window === 'undefined') return;
    
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isReducedMotion) return; // Skip animations for users who prefer reduced motion
    
    const stars = [];
    const maxStars = 20; // Limit the total number of stars
    
    const createShootingStar = () => {
      if (!footerRef.current || stars.length >= maxStars) return;
      
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      const size = Math.random() * 2 + 1;
      const posX = Math.random() * (footerRef.current.offsetWidth - 5);
      const speedFactor = Math.random() * 1.5 + 0.5;
      
      star.style.left = `${posX}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size * 3}px`;
      star.style.animationDuration = `${3 / speedFactor}s`;
      
      footerRef.current.appendChild(star);
      stars.push(star);
      
      setTimeout(() => {
        if (footerRef.current && footerRef.current.contains(star)) {
          footerRef.current.removeChild(star);
          const index = stars.indexOf(star);
          if (index > -1) {
            stars.splice(index, 1);
          }
        }
      }, 3000 / speedFactor);
    };
    
    // Use requestAnimationFrame for smoother animations
    const animateStars = () => {
      const isSmallScreen = windowWidth <= 576;
      if (Math.random() > (isSmallScreen ? 0.98 : 0.95)) {
        createShootingStar();
      }
      animationRef.current = requestAnimationFrame(animateStars);
    };
    
    animationRef.current = requestAnimationFrame(animateStars);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clean up any remaining stars
      stars.forEach(star => {
        if (footerRef.current && footerRef.current.contains(star)) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          footerRef.current.removeChild(star);
        }
      });
    };
  }, [windowWidth, isMounted]);
  
  // Simplified content for medium screens
  const renderMediumScreenContent = () => (
    <div className="footer-content">
      <div className="footer-column">
        <h3>Quick Links</h3>
        <div className="footer-links">
          <span onClick={() => handleNavigate("/")}>Home</span>
          <span onClick={() => handleNavigate("/events")}>Events</span>
          <span onClick={() => handleNavigate("/contact")}>Contact</span>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/ieee.cis.isima" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ieee.cis.isima" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/ieeecis" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  
  // Desktop layout content
  const renderDesktopContent = () => (
    <div className="footer-content">
      <div className="footer-column">
        <div className="footer-links">
          <span onClick={() => handleNavigate("/")}>Home</span>
          <span onClick={() => handleNavigate("/events")}>Events</span>
          <span onClick={() => handleNavigate("/contact")}>Contact</span>
        </div>
      </div>
      
      <div className="footer-column">
        <h3>Connect with us</h3>
        <div className="footer-social">
          <a href="https://www.facebook.com/ieee.cis.isima" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/cis.isima.sbc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/showcase/ieee-cis-chapter-isima-student-branch/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
  
  // Choose content based on screen size
  const renderFooterContent = () => {
    if (windowWidth > 992) {
      return renderDesktopContent();
    } else if (windowWidth > 576) {
      return renderMediumScreenContent();
    }
    // For small screens, return nothing - CSS will hide this content
    return null;
  };
  
  return (
    <footer className="footer" ref={footerRef}>
      <div className="stars-container"></div>
      
      {renderFooterContent()}
      
      <div className="footer-bottom">
        <a className="footer-copyright" href="https://medaziznasri.github.io/personal_portfolio/" target="_blank">&copy; Made by Mohamed Aziz Nasri  | IEEE CIS ISIMA</a>
      </div>
    </footer>
  );
}

export default Footer;
