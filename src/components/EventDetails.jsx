import React, { useState, useEffect, useRef, memo } from 'react';
import { useParams, Link, useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/EventDetails.css';
import { FiCalendar, FiMapPin, FiClock, FiUsers, FiCheckCircle, FiArrowLeft, FiMaximize2 } from 'react-icons/fi';

// Import the image and gallery images
import { ramadhanGallery, speakers } from './GalleryImports';

// Mock data - in a real app, you would fetch this from an API based on the event ID
const eventsData = {
  1: {
    id: 1,
    title: 'RamadhanIEEET v 4.0',
    date: '15-03-2025',
    time: '17:00 PM - 3:00 AM',
    location: ' Pepiniere des Entreprises APII Mahdia',
    category: 'upcoming',
    description: 'A special evening where we come together to break our fast, enjoy delicious food and create unforgettable memories.',
    overview: `Join us for our annual RamadhanIEEET celebration - a cherished tradition where we come together as a community to break our fast, share a meal, and forge lasting connections.

    This year's RamadhanIEEET v 4.0 promises to be our most special edition yet, featuring inspirational talks, networking opportunities, and a festive atmosphere that celebrates both our technical pursuits and cultural traditions.
    
    Whether you're a long-time IEEE member or simply curious about our community, all are welcome to join this meaningful gathering.`,
    Timeline: [
      { time: '13:00 PM', activity: 'Welcome & Check-in' },
      { time: '14:30 PM', activity: 'first session getting into SOC by Ghaya Derbali' },
      { time: '16:00 PM', activity: 'Entrepreneurial session by Mohamed Kamoun' },
      { time: '18:20 PM', activity: 'Maghrib Prayer & Iftar' },
      { time: '07:20 AM', activity: 'Networking  & activities' },
    ],
    speakers: [
      { 
        name: 'Ghaya Derbali',
        title: 'Cybersecurity Analyst',
        image: speakers[0]
      },
    
    ],
    gallery: ramadhanGallery,
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

// Memoized components for better performance
const EventHero = memo(({ event, handleRegister }) => (
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
          <FiCalendar aria-hidden="true" />
          <span>{event.date}</span>
        </div>
        <div className="meta-item">
          <FiClock aria-hidden="true" />
          <span>{event.time}</span>
        </div>
        <div className="meta-item">
          <FiMapPin aria-hidden="true" />
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
));

// Update the SpeakerCard component to better handle responsive layout
const SpeakerCard = memo(({ speaker }) => (
  <div className="speaker-card">
    <div className="speaker-image">
      <img 
        src={speaker.image} 
        alt={`${speaker.name}, ${speaker.title}`}
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Speaker';
        }}
      />
    </div>
    <div className="speaker-info">
      <h3 className="speaker-name">{speaker.name}</h3>
      <div className="speaker-title">{speaker.title}</div>
      {speaker.bio && <p className="speaker-bio">{speaker.bio}</p>}
    </div>
  </div>
));

const GalleryImage = memo(({ image, index, openGalleryImage }) => (
  <div 
    className="gallery-image"
    onClick={(e) => openGalleryImage(image, e)}
  >
    <img 
      src={image} 
      alt={`Event gallery image ${index + 1}`} 
      loading="lazy"
    />
    <div className="gallery-image-icon">
      <FiMaximize2 aria-hidden="true" />
    </div>
  </div>
));

const TabContent = memo(({ activeTab, event, openGalleryImage }) => {
  if (activeTab === 'overview') {
    return (
      <div className="overview-tab" role="tabpanel" aria-labelledby="tab-overview">
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
                  <FiCheckCircle aria-hidden="true" />
                </div>
                <div className="highlight-text">{highlight}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (activeTab === 'agenda') {
    return (
      <div className="agenda-tab" role="tabpanel" aria-labelledby="tab-agenda">
        <h2>Timeline</h2>
        <div className="agenda-timeline">
          {event.Timeline.map((item, idx) => (
            <div key={idx} className="agenda-item">
              <div className="agenda-time">{item.time}</div>
              <div className="agenda-activity">
                <div className="agenda-dot" aria-hidden="true"></div>
                <div className="agenda-content">{item.activity}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'speakers' && event.speakers?.length > 0) {
    return (
      <div className="speakers-tab" role="tabpanel" aria-labelledby="tab-speakers">
        <h2>Featured Speakers</h2>
        <div className="speakers-grid">
          {event.speakers.map((speaker, idx) => (
            <SpeakerCard key={idx} speaker={speaker} />
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'gallery') {
    return (
      <div className="gallery-tab" role="tabpanel" aria-labelledby="tab-gallery">
        <h2>Event Gallery</h2>
        <div className="gallery-grid">
          {event.gallery.map((image, idx) => (
            <GalleryImage 
              key={idx} 
              image={image} 
              index={idx}
              openGalleryImage={openGalleryImage}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
});

function EventDetails() {
  const { eventId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get tab from URL or default to 'overview'
  const initialTab = searchParams.get('tab') || 'overview';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);
  
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Simulate data fetching with error handling
    const fetchEvent = async () => {
      try {
        // In a real app, you would fetch from an API
        if (!eventsData[eventId]) {
          throw new Error("Event not found");
        }
        
        setTimeout(() => {
          setEvent(eventsData[eventId]);
          setLoading(false);
        }, 600);
      } catch (err) {
        setError(true);
        setLoading(false);
        console.error("Failed to fetch event:", err);
      }
    };
    
    fetchEvent();
    window.scrollTo(0, 0);
  }, [eventId]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 250) {
          headerRef.current.classList.add('header-scrolled');
        } else {
          headerRef.current.classList.remove('header-scrolled');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize activeTab with URL
  useEffect(() => {
    const currentTab = searchParams.get('tab') || 'overview';
    if (currentTab !== activeTab) {
      setActiveTab(currentTab);
    }
  }, [searchParams, activeTab]);

  const handleRegister = () => {
    if (event?.registrationUrl) {
      window.open(event.registrationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Improved mobile handling for gallery images
  const openGalleryImage = (image, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; 
  };

  const closeGalleryImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; 
  };

  // Better tab handling with improved mobile scrolling and URL persistence
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    
    // Update URL with the new tab
    setSearchParams({ tab: tabName });
    
    // Allow time for content to render before scrolling
    setTimeout(() => {
      if (contentRef.current) {
        const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
        const yOffset = -headerHeight - (window.innerWidth < 576 ? 10 : 20);
        const y = contentRef.current.offsetTop + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  // Add an effect to fix layout issues when switching tabs
  useEffect(() => {
    // Fix for any scrollbar issues when changing tabs
    if (contentRef.current) {
      // Force a repaint to ensure proper layout
      contentRef.current.style.display = 'none';
      void contentRef.current.offsetHeight; // This triggers a reflow
      contentRef.current.style.display = '';
    }
  }, [activeTab]);

  if (loading) {
    return (
      <div className="event-loading" aria-live="polite">
        <div className="loading-spinner" aria-hidden="true"></div>
        <p>Loading event details...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="event-not-found" aria-live="polite">
        <h2>Event Not Found</h2>
        <p>The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="back-to-events">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      {/* Optimize particle rendering for performance */}
      <div className="particles" aria-hidden="true">
        {[...Array(Math.min(window.innerWidth < 576 ? 4 : 8, 8))].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <EventHero event={event} handleRegister={handleRegister} />

      {/* Navigation Header */}
      <div className="event-nav-header" ref={headerRef} role="navigation">
        <div className="event-nav-container">
          <div className="event-nav-title">{event.title}</div>
          <div className="event-tabs" role="tablist">
            <button 
              id="tab-overview"
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
              aria-selected={activeTab === 'overview'}
              role="tab"
            >
              Overview
            </button>
            <button 
              id="tab-agenda"
              className={`tab-btn ${activeTab === 'agenda' ? 'active' : ''}`}
              onClick={() => handleTabChange('agenda')}
              aria-selected={activeTab === 'agenda'}
              role="tab"
            >
              Timeline
            </button>
            {event.speakers && event.speakers.length > 0 && (
              <button 
                id="tab-speakers"
                className={`tab-btn ${activeTab === 'speakers' ? 'active' : ''}`}
                onClick={() => handleTabChange('speakers')}
                aria-selected={activeTab === 'speakers'}
                role="tab"
              >
                Speakers
              </button>
            )}
            <button 
              id="tab-gallery"
              className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => handleTabChange('gallery')}
              aria-selected={activeTab === 'gallery'}
              role="tab"
            >
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Content Section with overflow fix */}
      <div className="event-content-section" ref={contentRef}>
        <div className="event-content-container">
          <TabContent 
            activeTab={activeTab}
            event={event}
            openGalleryImage={openGalleryImage}
            handleRegister={handleRegister}
          />
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

      {/* Enhanced lightbox with better mobile handling */}
      {selectedImage && (
        <div 
          className="lightbox" 
          onClick={closeGalleryImage}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
        >
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Gallery view - enlarged" />
          </div>
          <button 
            className="lightbox-close" 
            onClick={closeGalleryImage}
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

export default EventDetails;
