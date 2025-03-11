import React from 'react';

const FindUs = () => {
  return (
    <div className="find-us-container" id="location">
      <h2 className="location-title">Find Us</h2>
      
      <div className="location-content">
        <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.1953796263697!2d11.028317212212928!3d35.52416917252427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302233fa63272a1%3A0x886e5bcc642351c0!2sISI%20MAHDIA!5e0!3m2!1sen!2stn!4v1710991030949!5m2!1sen!2stn"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IEEE CIS Higher Institute of Computer Science Mahdia Location"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FindUs;