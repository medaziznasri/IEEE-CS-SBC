import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/EventDetails.css';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiCheckCircle, FiArrowLeft, FiMaximize2 } from 'react-icons/fi';

// Mock data - in a real app, you would fetch this from an API based on the event ID
const eventsData = {
  1: {
    id: 1,
    title: 'RamadhanIEEET v 4.0',
    date: '15-03-2025',
    time: '17:00 PM - 3:00 AM',
    location: ' Pepiniere des Entreprises APII Mahdia',
    category: 'upcoming',
    image: '/src/assets/images/ieee ramadhanieet.jpg',
    description: 'A special evening where we come together to break our fast, enjoy delicious food and create unforgettable memories.',
    overview: `Join us for our annual RamadhanIEEET celebration - a cherished tradition where we come together as a community to break our fast, share a meal, and forge lasting connections.

    This year's RamadhanIEEET v 4.0 promises to be our most special edition yet, featuring inspirational talks, networking opportunities, and a festive atmosphere that celebrates both our technical pursuits and cultural traditions.
    
    Whether you're a long-time IEEE member or simply curious about our community, all are welcome to join this meaningful gathering.`,
    Timeline: [
      { time: '17:00 PM', activity: 'Welcome & Check-in' },
      { time: '17:30 PM', activity: 'Opening & Introductions' },
      { time: '18:20 PM', activity: 'Maghrib Prayer & Iftar' },
      { time: '19:30 PM', activity: 'Networking & Community Building' },
      { time: '03:00 AM', activity: 'Closing' },
    ],
   
    gallery: [
      '/src/assets/ramathanIEEET/IMG_5745.JPG',
      '/src/assets/ramathanIEEET/IMG_5830.JPG',
      
    ],
    registrationUrl: 'https://ieee.surveysparrow.com/s/ramadhanieeet/tt-z2l6y',
    highlights: [
      'Structured networking sessions with IEEE members',
      'Interactive team-building activities and games throughout the evening',
      'Opportunity to participate in collaborative technical discussions',
      'Special prayer accommodations for all attendees',
      'Cultural exchange activities highlighting diverse traditions',
      'Professional development opportunities through informal mentoring',
      'Commemorative photos with the IEEE community',
      'Certificate of participation for all attendees'
    ]
  }
};

function EventDetails() {
  const { eventId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const headerRef = useRef(null);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // In a real app, fetch data from an API based on eventId
      setEvent(eventsData[eventId] || null);
      setLoading(false);
    }, 600);
    
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 300) {
          headerRef.current.classList.add('header-scrolled');
        } else {
          headerRef.current.classList.remove('header-scrolled');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [eventId]);

  if (loading) {
    return (
      <div className="event-loading">
        <div className="loading-spinner"></div>
        <p>Loading event details...</p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-not-found">
        <h2>Event Not Found</h2>
        <p>The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="back-to-events">Back to Events</Link>
      </div>
    );
  }

  const handleRegister = () => {
    // Open the registration URL in a new tab without changing UI state
    window.open(event.registrationUrl, '_blank');
  };

  const openGalleryImage = (image) => {
    setSelectedImage(image);
  };

  const closeGalleryImage = () => {
    setSelectedImage(null);
  };

  // Scroll to section when tab is changed
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    
    // Allow time for content to render before scrolling
    setTimeout(() => {
      const contentSection = document.querySelector('.event-content-section');
      if (contentSection) {
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const yOffset = -headerHeight - 20; // 20px additional offset for breathing room
        const y = contentSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="event-details-page">
      {/* Floating particles for visual effect */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="event-hero" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="event-hero-overlay"></div>
        <div className="event-hero-content">
          <div className="back-to-events-container">
            <Link to="/events" className="back-to-events">
              <FiArrowLeft /> Back to Events
            </Link>
          </div>
          <h1 className="event-title">{event.title}</h1>
          <div className="event-meta">
            <div className="meta-item">
              <FiCalendar />
              <span>{event.date}</span>
            </div>
            <div className="meta-item">
              <FiClock />
              <span>{event.time}</span>
            </div>
            <div className="meta-item">
              <FiMapPin />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="hero-actions">
            <button onClick={handleRegister} className="register-btn">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="event-nav-header" ref={headerRef}>
        <div className="event-nav-container">
          <div className="event-nav-title">{event.title}</div>
          <div className="event-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'agenda' ? 'active' : ''}`}
              onClick={() => handleTabChange('agenda')}
            >
              Timeline
            </button>
            {event.speakers && event.speakers.length > 0 && (
              <button 
                className={`tab-btn ${activeTab === 'speakers' ? 'active' : ''}`}
                onClick={() => handleTabChange('speakers')}
              >
                Speakers
              </button>
            )}
            <button 
              className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => handleTabChange('gallery')}
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="event-content-section">
        <div className="event-content-container">
          {activeTab === 'overview' && (
            <div className="overview-tab">
              <div className="overview-section">
                <h2>Event Overview</h2>
                <div className="overview-text">
                  {event.overview.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="highlights-section">
                <h2>Event Highlights</h2>
                <ul className="highlights-list">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <div className="highlight-icon">
                        <FiCheckCircle />
                      </div>
                      <div className="highlight-text">{highlight}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'agenda' && (
            <div className="agenda-tab">
              <h2>Timeline</h2>
              <div className="agenda-timeline">
                {event.Timeline.map((item, idx) => (
                  <div key={idx} className="agenda-item" data-aos="fade-right" data-aos-delay={idx * 100}>
                    <div className="agenda-time">{item.time}</div>
                    <div className="agenda-activity">
                      <div className="agenda-dot"></div>
                      <div className="agenda-content">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'speakers' && event.speakers && (
            <div className="speakers-tab">
              <h2>Featured Speakers</h2>
              <div className="speakers-grid">
                {event.speakers.map((speaker, idx) => (
                  <div key={idx} className="speaker-card">
                    <div className="speaker-image">
                      <img src={speaker.image} alt={speaker.name} />
                    </div>
                    <div className="speaker-info">
                      <h3 className="speaker-name">{speaker.name}</h3>
                      <div className="speaker-title">{speaker.title}</div>
                      <p className="speaker-bio">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="gallery-tab">
              <h2>Event Gallery</h2>
              <div className="gallery-grid">
                {event.gallery.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="gallery-image"
                    onClick={() => openGalleryImage(image)}
                  >
                    <img src={image} alt={`Gallery image ${idx + 1}`} />
                    <div className="gallery-image-icon">
                      <FiMaximize2 />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Registration CTA */}
      <div className="registration-cta">
        <div className="cta-content">
          <h2>Ready to join us?</h2>
          <p>Don't miss out on this incredible event! Register now to secure your spot.</p>
          <button onClick={handleRegister} className="register-cta-btn">
            Register for {event.title}
          </button>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeGalleryImage}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Gallery view" />
          </div>
          <button className="lightbox-close">×</button>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
