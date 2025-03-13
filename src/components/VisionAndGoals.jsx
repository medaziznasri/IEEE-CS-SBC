import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import '../styles/VisionAndGoals.css';

const VisionAndGoals = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="vision-section" ref={sectionRef}>
      <div className="vision-container">
        <div className="vision-header">
          <h2>Our Vision</h2>
          <div className="vision-line"></div>
        </div>
        
        <div className="vision-statement">
          <div className="vision-orb">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
          
          <p className="vision-text">
            The IEEE ISIMA CIS Chapter aims to exceed expectations by becoming a 
            leading force in fostering <span className="highlight">innovation</span>, 
            <span className="highlight">collaboration</span>, and <span className="highlight">excellence</span> in 
            Computational Intelligence. Through strategic initiatives and a dedicated team, 
            we strive to create an environment where knowledge, skills, 
            and creativity thrive.
          </p>
        </div>
        
        <div className="vision-subtitle">
          <h3>Our Strategic Goals</h3>
        </div>
        
        <div className="vision-cards">
          <div 
            className="vision-card technical-card" 
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="card-icon-container">
              <FaLaptopCode className="card-icon" />
              <div className="icon-backdrop"></div>
            </div>
            <h3>Technical Workshops</h3>
            <p>
              Hosting bootcamps, events, and training sessions to deepen knowledge 
              in Computational Intelligence and bridge theory with practice.
            </p>
            <div className="card-circuit"></div>
          </div>
          
          <div 
            className="vision-card growth-card" 
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="card-icon-container">
              <FaUsers className="card-icon" />
              <div className="icon-backdrop"></div>
            </div>
            <h3>Team Growth & Soft Skills</h3>
            <p>
              Empowering our team with leadership, communication, teamwork, and 
              problem-solving skills for both technical and personal development.
            </p>
            <div className="card-circuit"></div>
          </div>
          
          <div 
            className="vision-card reach-card" 
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="card-icon-container">
              <FaGlobeAmericas className="card-icon" />
              <div className="icon-backdrop"></div>
            </div>
            <h3>Expanding Our Reach</h3>
            <p>
              Building strong connections within and beyond IEEE, increasing our 
              chapter's visibility and influence in the field of Computational Intelligence.
            </p>
            <div className="card-circuit"></div>
          </div>
        </div>
        
        <div className="vision-footer">
          <div className="vision-dots">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="vision-dot"></div>
            ))}
          </div>
          <p>Join us in shaping the future of Computational Intelligence</p>
        </div>
      </div>
      
      <div className="vision-background">
        <div className="vision-grid"></div>
        <div className="vision-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="vision-particle"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionAndGoals;
