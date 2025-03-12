import React, { useState, useEffect, useRef } from 'react';
import '../styles/MemberOfMonth.css';
import image from "../assets/images/aziz nsari.jpg"

const MemberOfMonth = ({ member }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  // If no member is passed, use this default member data
  const defaultMember = {
    name: "Med Aziz Nasri",
    role: "Machine Learning Researcher",
    imageUrl: image
  };

  // Use provided member or default
  const featuredMember = member || defaultMember;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;
    
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className={`motm-container ${isVisible ? 'visible' : ''}`}>
      <div className="motm-header">
        <div className="motm-title-container">
          <h2 className="motm-title">Member of the Month</h2>
          <div className="motm-title-decoration">
            <svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,10 L100,10" className="motm-line" />
              <circle cx="50" cy="10" r="4" className="motm-circle" />
              <circle cx="30" cy="10" r="2" className="motm-circle small" />
              <circle cx="70" cy="10" r="2" className="motm-circle small" />
            </svg>
          </div>
        </div>
      </div>
      
      <div 
        className="motm-frame-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="motm-background-effects">
          <div className="motm-bg-circle"></div>
          <div className="motm-bg-grid"></div>
          <div className="motm-bg-dots"></div>
          <div className="motm-scan-effect"></div>
        </div>
        
        <div 
          className="motm-artistic-frame"
          style={{ 
            transform: `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)`
          }}
        >
          <div className="motm-circuit-pattern top-left"></div>
          <div className="motm-circuit-pattern top-right"></div>
          <div className="motm-circuit-pattern bottom-left"></div>
          <div className="motm-circuit-pattern bottom-right"></div>
          
          <div className="motm-image-container">
            <div 
              className="motm-image-wrapper"
              style={{ 
                transform: `translateX(${mousePosition.x * -10}px) translateY(${mousePosition.y * -10}px)`
              }}
            >
              <img 
                src={featuredMember.imageUrl} 
                alt={featuredMember.name} 
                className="motm-image" 
              />
              <div className="motm-image-glitch"></div>
            </div>
            
            <div className="motm-image-tech-border">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="motm-tech-border">
                <path d="M0,20 L0,0 L20,0" className="motm-corner" />
                <path d="M80,0 L100,0 L100,20" className="motm-corner" />
                <path d="M100,80 L100,100 L80,100" className="motm-corner" />
                <path d="M20,100 L0,100 L0,80" className="motm-corner" />
              </svg>
            </div>
            
            <div className="motm-image-effects">
              <div className="motm-scanline"></div>
              <div className="motm-glow-effect"></div>
            </div>
          </div>
          
          <div className="motm-member-info">
            <h3 
              className="motm-name"
              style={{ 
                transform: `translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`
              }}
            >
              {featuredMember.name}
              <span className="motm-name-highlight"></span>
            </h3>
            
            <div className="motm-member-decoration">
              <span className="motm-member-line"></span>
              <span className="motm-member-dot"></span>
              <span className="motm-member-line"></span>
            </div>
          </div>
        </div>
        
        <div className="motm-data-particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`motm-data-particle p${i+1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberOfMonth;
