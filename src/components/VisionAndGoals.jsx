import React, { useEffect, useRef } from 'react';
import { FaServer, FaGraduationCap, FaNetworkWired } from 'react-icons/fa';
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
        </div>
        
        <div className="vision-statement">
          <p className="vision-text">
            The IEEE Computer Society Chapter at ISIMA aims to be the leading community for 
            <span className="highlight"> computing professionals</span> and students by fostering 
            <span className="highlight"> technical excellence</span> and 
            <span className="highlight"> innovation</span>. We are committed to advancing the theory, 
            practice, and application of computer and information processing sciences through 
            education, knowledge sharing, and collaborative initiatives.
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
              <FaServer className="card-icon" />
            </div>
            <h3>Technical Development</h3>
            <p>
              Organizing hands-on workshops, hackathons, and training sessions on emerging 
              computing technologies, software development methodologies, and system architecture.
            </p>
          </div>
          
          <div 
            className="vision-card growth-card" 
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="card-icon-container">
              <FaGraduationCap className="card-icon" />
            </div>
            <h3>Professional Growth</h3>
            <p>
              Creating opportunities for members to enhance both technical and soft skills 
              through mentoring programs, specialized certifications, and industry connections.
            </p>
          </div>
          
          <div 
            className="vision-card reach-card" 
            ref={(el) => (cardsRef.current[2] = el)}
          >
            <div className="card-icon-container">
              <FaNetworkWired className="card-icon" />
            </div>
            <h3>Community Building</h3>
            <p>
              Establishing a strong network of computing professionals, fostering collaboration 
              across disciplines, and creating platforms for knowledge exchange and innovation.
            </p>
          </div>
        </div>
        
        <div className="vision-footer">
          <p>Join us in advancing the future of computing</p>
        </div>
      </div>
      
      <div className="vision-background"></div>
    </section>
  );
};

export default VisionAndGoals;
