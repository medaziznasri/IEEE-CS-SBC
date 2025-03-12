import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const successRef = useRef(null);
  
  // Generate bubbles for background effect
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      const bubbleCount = 10;
      
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 80 + 40,
          left: Math.random() * 100,
          duration: Math.random() * 15 + 8,
          delay: Math.random() * 5
        });
      }
      
      setBubbles(newBubbles);
    };
    
    generateBubbles();
  }, []);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.sendForm(
        'service_539xqrp',  // Replace with your EmailJS service ID
        'template_5e19yoi', // Replace with your EmailJS template ID
        formRef.current,
        'g73QYuwnRBvVgzuja'   // Replace with your EmailJS public key
      );
      
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      
      // Show success message
      setShowSuccess(true);
      
      // Style change for success message display
      if (successRef.current) {
        successRef.current.style.display = 'flex';
      }
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setErrors({
        submit: 'Failed to send your message. Please try again later.'
      });
    }
  };
  
  return (
    <div className="contact-us-container" id="contact">
      <div className="contact-bubbles-container">
        <div className="animated-bg-shape shape-1"></div>
        <div className="animated-bg-shape shape-2"></div>
        <div className="animated-bg-shape shape-3"></div>
        
        {bubbles.map(bubble => (
          <div 
            key={bubble.id} 
            className="contact-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`
            }}
          ></div>
        ))}
      </div>
      
      <h2 className="contact-title">Get In Touch</h2>
      <div className="glowing-line"></div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-info-header">
            <h2>Contact Information</h2>
            <p>Have questions or want to collaborate? Reach out to us using the information below.</p>
          </div>
          
          <div className="contact-info-items">
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Our Location</h3>
                <p>ISI Mahdia, Mahdia, Tunisia</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>ieee.cis.isima@ieee.org</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+216 94198625</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/ieee.cis.isima" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
            
              <a href="https://www.instagram.com/cis.isima.sbc/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/showcase/ieee-cis-chapter-isima-student-branch/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {!showSuccess ? (
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={errors.subject ? 'error' : ''}
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              {errors.submit && <div className="error-message">{errors.submit}</div>}
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="submit-icon">→</span>
              </button>
            </form>
          ) : (
            <div className="form-success" ref={successRef} style={{ display: 'flex' }}>
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;