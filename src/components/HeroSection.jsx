import { useEffect, useRef, useState } from 'react';

function HeroSection() {
  const particlesRef = useRef(null);
  const textRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "Empowering Technology, Inspiring Innovation";  
  // Handle scroll to next section
  const handleScrollClick = () => {
    // Find the next section element (Team component)
    const nextSection = document.querySelector('.team_container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    // Animate the text reveal
    const text = textRef.current;
    if (text) {
      text.classList.add('text-revealed');
    }
    
    // Typing animation for subtitle
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);
    
    // Add cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    // Setup particles animation with better performance
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;
    
    // Create particles dynamically - reduced count for better performance
    const particleCount = window.innerWidth < 768 ? 20 : 35;
    
    // Create fragment for better DOM performance
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('hero-particle');
      
      // Randomize particle properties with more variety
      const size = Math.random() * 10 + 2;
      const opacity = Math.random() * 0.5 + 0.3;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = `${opacity}`;
      
      // Random position with better distribution
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Improved animation variety
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 8;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      // Add to fragment instead of direct DOM manipulation
      fragment.appendChild(particle);
    }
    
    // Single DOM update
    particlesContainer.appendChild(fragment);
    
    // Cleanup
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-particles" ref={particlesRef}></div>
      
      <div className="hero-content">
        <div className="hero-text-container" ref={textRef}>
          <h1 className="hero-title">
            <span className="hero-title-main">IEEE CS ISIMa SB</span>
            <span className="hero-title-gradient">Computer Society</span>
          </h1>
          
          <div className="hero-subtitle-container">
            <div className="hero-subtitle-line"></div>
            <p className="hero-subtitle">
              {typedText}
              <span className="typing-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
            </p>
            <div className="hero-subtitle-line"></div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator" onClick={handleScrollClick}>
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow-container"></div>
        <span className="scroll-arrow"></span>
        {/* Ripple effects */}
        <div className="ripple"></div>
      </div>
    </div>
  );
}

export default HeroSection;
