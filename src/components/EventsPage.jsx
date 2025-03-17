import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/ieee ramadhanieet.jpg';
import '../styles/EventsPage.css';

function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedEvents, setAnimatedEvents] = useState([]);
  
  // Add particles for consistent look with EventDetails
  const [particles] = useState(Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 5
  })));
  
  const events = useMemo(() => [
    {
      id: 1,
      title: 'RamadhanIEEET v 4.0',
      date: '16-03-2025',
      category: 'upcoming',
      image: logo1,
      description: 'A special evening where we come together to break our fast, enjoy delicious food and create unforgettable memories.'
    },   
    // You can add more events when needed
  ], []);

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming Events' },
    { id: 'workshop', label: 'Workshops' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedEvents(events.map(event => event.id));
    }, 100);
    return () => clearTimeout(timer);
  }, [events]);

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="events-page-container">
      {/* Particles for consistent look with EventDetails */}
      <div className="particles" aria-hidden="true">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="decoration-blob blob-1"></div>
      <div className="decoration-blob blob-2"></div>
      
      <div className="events-header">
        <h2 className="section-title">Our Events</h2>
        <p className="events-subtitle">
          Discover our latest activities, workshops, and community gatherings designed to enhance your skills and expand your network.
        </p>
      </div>

      <div className="events-filter">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="events-timeline">
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div 
              key={event.id} 
              className={`event-card ${animatedEvents.includes(event.id) ? 'animate' : ''}`}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-date">{event.date}</div>
                <div className={`event-category ${event.category}`}>
                  {event.category === 'upcoming' ? 'Upcoming' : 'Workshop'}
                </div>
              </div>
              <div className="event-content">
                <h3 className="event-title">
                  <span className="title-text-override">{event.title}</span>
                </h3>
                <p className="event-description">{event.description}</p>
                <div className="event-buttons">
                  <Link 
                    to={`/events/${event.id}`} 
                    className="view-more-link"
                  >
                    View Details
                    <span className="icon">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;