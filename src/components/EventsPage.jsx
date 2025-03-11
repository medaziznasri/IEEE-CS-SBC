import React, { useState, useEffect } from 'react';
import logo from '../assets/images/gods 4.0.png';
import logo1 from '../assets/images/ieee ramadhanieet.jpg';
function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedEvents, setAnimatedEvents] = useState([]);
  
  const events = [
    {
      id: 1,
      title: 'RamadhanIEEET v 4.0',
      date: '16-03-2025',
      category: 'upcoming',
      image: logo1,
      description: 'A special evening where we come together to break our fast , enjoy delicious food and create unforgettable memories.'
    },

    {
      id: 2,
      title: 'GOD 4.0',
      date: '13-02-2025',
      category: 'all',
      image: logo, 
      description: '24-hour hackathon with amazing prizes.'
    },
  ];

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
  }, []);

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="events-page-container">
      <div className="flow-bubble"></div>
      <div className="flow-bubble"></div>
      <div className="flow-bubble"></div>
      
      <div className="events-header">
        <h2 className="section-title">Events</h2>
        <div className="glowing-line"></div>
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
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-buttons">
                  <a href="#" className="view-more-link">View More</a>
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