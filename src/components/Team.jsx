import React from 'react';
import profile1 from '../assets/team/aya saoud.jpg';
import profile2 from '../assets/team/imen.jpg';
import profile3 from '../assets/team/lighter.jpg';
import profile4 from '../assets/team/ayoub.jpg';
import profile5 from '../assets/team/islem.jpg';
import profile6 from '../assets/team/nasser.jpg';
import profile7 from '../assets/team/salim.jpg';
import '../styles/Team.css';

function Team() {
  // Simple team member data
  const teamMembers = [
    {
      id: 1,
      image: profile1,
      name: "Aya Saoud",
      role: "Chairwoman",
      email: "rayen.ourabi@ieee.org",
      linkedin: "https://www.linkedin.com/in/rayen-ourabi-404501341/",
      facebook: "https://www.facebook.com/profile.php?id=100066572354253",
      instagram: "https://www.instagram.com/ourabi456/"
    },
    {
      id: 2,
      image: profile2,
      name: "imen othmen",
      role: "Vice-Chair",
      email: "maryem@ieee.org",
      linkedin: "https://www.linkedin.com/in/maryem-mbarek",
      facebook: "https://www.facebook.com/maryem.mbarek.121",
      instagram: "https://www.instagram.com/maryem.mbarek/"
    },
    {
      id: 5,
      image: profile5,
      name: "Mohamed islem chelly",
      role: "General Secretary",
      email: "dali.kamessi@ieee.org",
      linkedin: "https://www.linkedin.com/in/mohamed-ali-kamassi-437308355/",
      facebook: "https://www.facebook.com/profile.php?id=100085124143365",
      instagram: "https://www.instagram.com/dalikamassi/"
    },
    {
      id: 4,
      image: profile4,
      name: "Ayoub Ghdiri",
      role: "Webmaster",
      email: "yassine.romdhane@ieee.org",
      linkedin: "https://www.linkedin.com/in/ahmed-yassine-romdhane-04b022333/",
      facebook: "https://www.facebook.com/ahmedyassine.romdhan",
      instagram: "https://www.instagram.com/ysn_romdhane1/"
    },
    {
      id: 3,
      image: profile3,
      name: "Dhia Kallel",
      role: "Treasurer",
      email: "amir.toumi@ieee.org",
      linkedin: "https://www.linkedin.com/in/amir-toumi-b95108337/",
      facebook: "https://www.facebook.com/amir.toumi.359",
      instagram: "https://www.instagram.com/amir._.toumi/"
    },
    
    {
      id: 6,
      image: profile6,
      name: "Mohamed Nasser",
      role: "Logistics Manager",
      email: "aya.chokri@ieee.org",
      linkedin: "https://www.linkedin.com/in/aya-chokri-97190033a/",
      facebook: "https://www.facebook.com/aya.chokri.505",
      instagram: "https://www.instagram.com/aya_chokrii"
    },
    {
      id: 7,
      image: profile7,
      name: "Salim Hazmi",
      role: "HR Manager",
      email: "sabra.benfadhel@ieee.org",
      linkedin: "https://www.linkedin.com/in/ben-fadhel-sabra-75030829a/",
      facebook: "https://www.facebook.com/profile.php?id=100079018811939",
      instagram: "https://www.instagram.com/sabra_benfadhel/"
    }
  ];

  return (
    <section className="team-section">
      {/* Enhanced header with improved styling */}
      <div className="team-header">
        <h2 className="team-title">
          <span className="title-gradient">Our Executive</span> 
          <span className="title-accent">Committee</span>
        </h2>
        <div className="title-underline"></div>
      </div>
      
      {/* Responsive team grid */}
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="card-content">
              {/* Member image */}
              <div className="image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                />
              </div>
              
              {/* Card overlay with name and role */}
              <div className="card-overlay">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
              
              {/* Social links that appear on hover */}
              <div className="social-links">
                <a href={`mailto:${member.email}`} className="social-link email" aria-label={`Email ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label={`LinkedIn profile of ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label={`Facebook profile of ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label={`Instagram profile of ${member.name}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
